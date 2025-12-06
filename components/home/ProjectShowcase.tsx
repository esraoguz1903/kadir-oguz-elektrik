import Image from "next/image";

// Şimdilik placeholder görsel kullanıyoruz, daha sonra gerçek proje görselleri ile değiştirilebilir.
const projects = [
  {
    id: 1,
    title: "Ofis Aydınlatma Yenileme",
    category: "Ticari",
    imageBefore: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
    description: "Eski floresan aydınlatmalar modern LED paneller ile değiştirilerek %40 enerji tasarrufu sağlandı."
  },
  {
    id: 2,
    title: "Akıllı Ev Sistemi Kurulumu",
    category: "Konut",
    imageBefore: "https://images.unsplash.com/photo-1565514020125-2c66e7f96e8b?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1565514020125-2c66e7f96e8b?q=80&w=800&auto=format&fit=crop", 
    description: "Tüm evin aydınlatma ve ısıtma sistemleri tek bir merkezden kontrol edilebilir hale getirildi."
  }
];

export function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Projelerimiz</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Önce & Sonra
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Yaptığımız işlerin kalitesini ve dönüşümü inceleyin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-2 h-64 relative">
                <div className="relative h-full border-r-2 border-white">
                    <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm z-10">Önce</div>
                    <div className="w-full h-full bg-gray-200 relative">
                       <Image 
                        src={project.imageBefore} 
                        alt={`${project.title} Önce`} 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       />
                    </div>
                </div>
                <div className="relative h-full">
                    <div className="absolute top-2 right-2 bg-green-500/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm z-10">Sonra</div>
                    <div className="w-full h-full bg-gray-200 relative">
                       <Image 
                        src={project.imageAfter} 
                        alt={`${project.title} Sonra`} 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       />
                    </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">{project.category}</span>
                </div>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
