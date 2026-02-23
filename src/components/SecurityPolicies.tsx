import { ShieldCheck, FileText, Lock } from 'lucide-react';

const SecurityPolicies = () => {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-dark dark:text-white transition-colors">Políticas de Seguridad</h1>
                <p className="text-lg text-primary-dark/70 dark:text-primary-light/80">
                    En Fluxara, la seguridad de tu información es nuestra prioridad número uno.
                    Aquí detallamos nuestras políticas y protocolos para garantizar la integridad y confidencialidad de tus datos.
                </p>
            </div>

            <div className="grid gap-8">
                <section className="bg-white dark:bg-primary-dark/50 border border-slate-200 dark:border-white/5 rounded-3xl p-8 shadow-sm transition-colors">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-accent-pop/10 text-accent-pop rounded-xl">
                            <Lock className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-semibold text-primary-dark dark:text-white">Protección de Datos</h2>
                    </div>
                    <div className="space-y-4 text-primary-dark/70 dark:text-primary-light/80">
                        <p>
                            Todos los datos procesados a través de nuestras automatizaciones están encriptados end-to-end tanto en tránsito (TLS 1.3) como en reposo (AES-256).
                        </p>
                        <p>
                            No almacenamos información sensible más allá del tiempo estrictamente necesario para la ejecución de los flujos de trabajo acordados.
                        </p>
                    </div>
                </section>

                <section className="bg-white dark:bg-primary-dark/50 border border-slate-200 dark:border-white/5 rounded-3xl p-8 shadow-sm transition-colors">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-accent-pop/10 text-accent-pop rounded-xl">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-semibold text-primary-dark dark:text-white">Auditorías y Cumplimiento</h2>
                    </div>
                    <div className="space-y-4 text-primary-dark/70 dark:text-primary-light/80">
                        <p>
                            Realizamos auditorías de seguridad periódicas y evaluaciones de vulnerabilidad en nuestra infraestructura.
                        </p>
                        <p>
                            Nuestras prácticas de ingeniería cumplen con los estándares de la industria, asegurando que las integraciones con software de terceros (APIs, plataformas SaaS) utilicen siempre métodos de autenticación seguros (como OAuth 2.0).
                        </p>
                    </div>
                </section>

                <section className="bg-white dark:bg-primary-dark/50 border border-slate-200 dark:border-white/5 rounded-3xl p-8 shadow-sm transition-colors">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-accent-pop/10 text-accent-pop rounded-xl">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-semibold text-primary-dark dark:text-white">Control de Acceso</h2>
                    </div>
                    <div className="space-y-4 text-primary-dark/70 dark:text-primary-light/80">
                        <p>
                            Implementamos el principio de menor privilegio (PoLP). Nuestro equipo solo tiene acceso a los sistemas y datos necesarios para desarrollar y mantener tus automatizaciones.
                        </p>
                        <p>
                            Requerimos autenticación multifactor (MFA) para todo acceso administrativo a nuestra infraestructura y sistemas de gestión de clientes.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SecurityPolicies;
