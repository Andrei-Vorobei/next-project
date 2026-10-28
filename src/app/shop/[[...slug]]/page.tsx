import { Suspense } from "react";

interface ShopPageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default function ShopPage({ params }: ShopPageProps) {
  return (
    <Suspense fallback={<div className='p-10 min-h-screen'>Loading...</div>}>
      <ShopContent params={params} />
    </Suspense>
  );
}

async function ShopContent({ params }: ShopPageProps) {
  const { slug = [] } = await params;
  const [category, brand, model] = slug;

  return (
    <div className='p-10 font-sans bg-white min-h-screen'>
      <header className='mb-10'>
        <h1 className='text-5xl font-black uppercase tracking-tighter'>
          {category ? `Catalog / ${category}` : "Main Store"}
        </h1>
        <p className='text-zinc-400 mt-2 font-medium'>
          {brand ? `Exploring ${brand} collection` : "Browse all our products"}
        </p>
      </header>

      <nav className='flex items-center gap-2 mb-8'>
        <span className='text-zinc-900 font-bold'>Shop</span>
        {slug.map((s, i) => (
          <div key={i} className='flex items-center gap-2'>
            <span className='text-zinc-300'>/</span>
            <span className='text-zinc-500 capitalize'>{s}</span>
          </div>
        ))}
      </nav>

      <div className='grid grid-cols-1 gap-6'>
        {!category && (
          <div className='p-20 bg-black text-white rounded-[3rem] text-center'>
            <h2 className='text-3xl font-bold'>Добро пожаловать в магазин!</h2>
            <p className='opacity-50 mt-2'>Выберите категорию выше, чтобы начать.</p>
          </div>
        )}

        {category && (
          <div className='p-8 bg-white border border-zinc-200 rounded-4xl shadow-sm'>
            <p className='text-xs font-mono text-blue-500 font-bold uppercase'>Active Filter</p>
            <div className='mt-4 space-y-2'>
              <p>
                <strong>Category:</strong> {category}
              </p>
              {brand && (
                <p>
                  <strong>Brand:</strong> {brand}
                </p>
              )}
              {model && (
                <p>
                  <strong>Model:</strong> {model}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className='mt-10 p-4 bg-zinc-200/50 rounded-xl font-mono text-[10px] text-zinc-500'>
        DEBUG: slug_state = {JSON.stringify(slug)}
      </div>
    </div>
  );
}
