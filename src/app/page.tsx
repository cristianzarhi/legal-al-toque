
import { DocumentTextIcon, ShieldCheckIcon, ClockIcon, ArrowPathIcon, ChatBubbleBottomCenterTextIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Genera contratos legales al instante con IA.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Documentos legales profesionales en minutos, sin complicaciones.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Probar gratis
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Beneficios que marcan la diferencia
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <ClockIcon className="h-16 w-16 mx-auto mb-6 text-blue-600" />
              <h3 className="text-xl font-bold mb-4">Rapidez</h3>
              <p className="text-gray-600">
                Genera contratos en minutos, no en días
              </p>
            </div>
            <div className="text-center">
              <ShieldCheckIcon className="h-16 w-16 mx-auto mb-6 text-blue-600" />
              <h3 className="text-xl font-bold mb-4">Confianza</h3>
              <p className="text-gray-600">
                Respaldado por expertos legales
              </p>
            </div>
            <div className="text-center">
              <CheckCircleIcon className="h-16 w-16 mx-auto mb-6 text-blue-600" />
              <h3 className="text-xl font-bold mb-4">Sin errores</h3>
              <p className="text-gray-600">
                Documentos precisos y actualizados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Cómo funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <span className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </span>
                <DocumentTextIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Selecciona el contrato</h3>
                <p className="text-gray-600">
                  Elige el tipo de documento que necesitas
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <span className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </span>
                <ChatBubbleBottomCenterTextIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Responde preguntas</h3>
                <p className="text-gray-600">
                  Proporciona los detalles necesarios
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <span className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </span>
                <ArrowPathIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Recibe tu contrato</h3>
                <p className="text-gray-600">
                  Descarga tu documento personalizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-blue-600 rounded-full"></div>
                  <div className="ml-4">
                    <h4 className="font-bold">Cliente Satisfecho {i}</h4>
                    <p className="text-gray-600">Empresa {i}</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "El servicio superó mis expectativas. Pude generar un contrato profesional en minutos, ahorrando tiempo y dinero."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Comienza a generar tus contratos hoy mismo
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Sin compromisos. Cancela cuando quieras.
          </p>
          <button className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Comenzar ahora
          </button>
        </div>
      </section>
    </main>
  );
}
