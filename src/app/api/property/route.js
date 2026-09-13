import { NextResponse } from 'next/server';

export async function GET(request) {
  const url = "https://realtor.realtyapi.io/details/byaddress?address=9504+Quail+Village+Ln%2C+Austin%2C+TX+78758";
  const apiKey = process.env.REALTY_API_KEY;

  // Curated fallback matching Figma design
  const figmaFallback = {
    categories: [
      { id: 'apartments', title: 'Apartment Residences', count: '7.200 Properies', image: '/images/cat-apartments.png' },
      { id: 'villas', title: 'Modern Villas', count: '966 Properies', image: '/images/cat-villas.png' },
      { id: 'farmhouses', title: 'Farm Houses', count: '245 Properies', image: '/images/cat-farmhouses.png' },
      { id: 'coastal', title: 'Coastal Estates', count: '312 Properies', image: '/images/ad-coastal-serenity.png' },
      { id: 'townhomes', title: 'Townhome Residences', count: '540 Properies', image: '/images/offer-apartment-main.png' },
    ],
    property: {
      address: {
        line: "9504 Quail Village Ln",
        city: "Austin",
        state_code: "TX",
        postal_code: "78758",
        full_address: "9504 Quail Village Ln, Austin, TX 78758"
      },
      prop_type: "Townhome / Luxury Residence",
      price: 240000,
      formatted_price: "$240,000",
      old_price: "$265,000",
      beds: 3,
      baths: 2.5,
      building_size: { size: 1193, units: "sqft" },
      description: "Location-Location - 2 Story * Peaceful & Quiet Townhome Community * Tranquil Parklike Setting * Hard Tile in Kitchen & powder bathroom * Charming Private Patio * HOA Includes Pool, Tennis Courts, Club House, * Rear Entry 1 Car Garage plus Additional Reserved Parking Space Included * Convenient Location To The Domain, Bus Service & Shopping.",
      photos: [
        "/images/offer-apartment-main.png",
        "/images/apartment-card-2.png",
        "/images/apartment-card-3.png"
      ]
    }
  };

  if (!apiKey || apiKey.trim() === '') {
    return NextResponse.json({
      success: true,
      isLive: false,
      message: "REALTY_API_KEY not configured. Showing curated fallback.",
      data: figmaFallback
    });
  }

  try {
    const res = await fetch(url, {
      headers: {
        'x-realtyapi-key': apiKey,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({
        success: true,
        isLive: false,
        message: `API returned ${res.status}. Falling back to default design.`,
        data: figmaFallback
      });
    }

    const apiData = await res.json();
    const detail = apiData?.detail || {};
    const livePhoto = detail?.photos?.[0]?.href || '/images/offer-apartment-main.png';

    const liveCategories = [
      { id: 'apartments', title: 'Apartment Residences', count: '7.200 Properies', image: '/images/cat-apartments.png' },
      { id: 'villas', title: 'Modern Villas', count: '966 Properies', image: '/images/cat-villas.png' },
      { id: 'farmhouses', title: 'Farm Houses', count: '245 Properies', image: '/images/cat-farmhouses.png' },
      { id: 'coastal', title: 'Coastal Estates', count: '312 Properies', image: '/images/ad-coastal-serenity.png' },
      { id: 'townhomes', title: 'Townhome Residences', count: '540 Properies', image: livePhoto || '/images/offer-apartment-main.png' },
    ];

    return NextResponse.json({
      success: true,
      isLive: true,
      data: {
        detail,
        categories: liveCategories,
        property: {
          address: detail?.address || figmaFallback.property.address,
          prop_type: detail?.details?.type ? detail.details.type.toUpperCase() : "TOWNHOMES",
          price: detail?.list_price || 240000,
          formatted_price: detail?.list_price ? `$${detail.list_price.toLocaleString()}` : "$240,000",
          old_price: "$265,000",
          beds: detail?.details?.beds || 3,
          baths: detail?.details?.baths || 2.5,
          building_size: { size: detail?.details?.sqft || 1193, units: "sqft" },
          description: detail?.details?.text || figmaFallback.property.description,
          photos: detail?.photos && detail.photos.length > 0 ? detail.photos.map(p => p.href) : figmaFallback.property.photos
        }
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: true,
      isLive: false,
      message: error.message,
      data: figmaFallback
    });
  }
}
