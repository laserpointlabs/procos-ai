export default function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Header */}
            <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                ProcOS.ai
                            </h1>
                            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                                Process-Oriented Operating System
                            </span>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                                Features
                            </a>
                            <a href="#architecture" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                                Architecture
                            </a>
                            <a href="#docs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                                Documentation
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Decision Intelligence
                        <br />
                        <span className="text-blue-600 dark:text-blue-400">Operating System</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Transform complex workflow orchestration through familiar operating system concepts.
                        Just like your computer runs processes and threads, ProcOS.ai runs decision processes
                        and thought threads.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                            Explore Platform
                        </button>
                        <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-colors">
                            View Documentation
                        </button>
                    </div>
                </div>
            </section>

            {/* Process-OS Concept */}
            <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Familiar OS Concepts, Applied to Decisions
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Making complex decision intelligence accessible through operating system metaphors
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                                <div className="w-6 h-6 border-2 border-blue-600 rounded"></div>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Process Management
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                Create, schedule, and terminate decision processes just like an operating system manages computational processes.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                                <div className="w-6 h-6 border-2 border-green-600 rounded-sm"></div>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Memory Management
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                Allocate and manage institutional knowledge like an OS manages system memory.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                                <div className="w-6 h-6 border-2 border-purple-600 rounded-full"></div>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Thread Scheduling
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                Manage thought threads and decision workflows with intelligent scheduling and resource allocation.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                                <div className="w-6 h-6 border-2 border-orange-600"></div>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                I/O Management
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                Handle human-AI collaboration like an OS manages input/output operations.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                                <div className="w-6 h-6 border-2 border-red-600 rounded-lg"></div>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Security & Governance
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                Ensure compliant decision-making with access control and protection mechanisms.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                                <div className="w-6 h-6 border-2 border-indigo-600 rounded-md"></div>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                File System
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                Organize and access decision-relevant data with structured information systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Preview */}
            <section id="architecture" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            System Architecture
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Built on proven microservices architecture with process-oriented design
                        </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4 font-medium">
                                    User Space
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded px-3 py-2 text-sm">
                                        Desktop Environment
                                    </div>
                                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded px-3 py-2 text-sm">
                                        Decision Applications
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="bg-green-600 text-white px-4 py-2 rounded-lg mb-4 font-medium">
                                    Kernel Space
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded px-3 py-2 text-sm">
                                        Digital Assistance Kernel
                                    </div>
                                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded px-3 py-2 text-sm">
                                        Process Manager
                                    </div>
                                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded px-3 py-2 text-sm">
                                        Memory Manager
                                    </div>
                                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded px-3 py-2 text-sm">
                                        Event Manager
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="bg-purple-600 text-white px-4 py-2 rounded-lg mb-4 font-medium">
                                    Hardware Layer
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded px-3 py-2 text-sm">
                                        Cognitive Engine
                                    </div>
                                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded px-3 py-2 text-sm">
                                        Knowledge Storage
                                    </div>
                                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded px-3 py-2 text-sm">
                                        Data I/O
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Ready to Transform Your Decision Intelligence?
                    </h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Experience the future of process-oriented decision making
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                        Get Early Access
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">ProcOS.ai</h4>
                            <p className="text-gray-600 dark:text-gray-400">Process-Oriented Operating System</p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                Documentation
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                GitHub
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}