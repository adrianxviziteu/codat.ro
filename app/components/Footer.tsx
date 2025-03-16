'use client';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
  titleId?: string;
}

export default function Footer() {
  const navigation = {
    solutions: [
      { name: 'Verificare IMEI', href: '#' },
      { name: 'Verificare iCloud', href: '#' },
      { name: 'Verificare Garanție', href: '#' },
      { name: 'Verificare Blacklist', href: '#' },
    ],
    support: [
      { name: 'Documentație', href: '#' },
      { name: 'Ghiduri', href: '#' },
      { name: 'Status API', href: '#' },
      { name: 'Contact Suport', href: '#' },
    ],
    company: [
      { name: 'Despre Noi', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Cariere', href: '#' },
      { name: 'Parteneri', href: '#' },
    ],
    legal: [
      { name: 'Termeni și Condiții', href: '#' },
      { name: 'Politica de Confidențialitate', href: '#' },
      { name: 'Politica de Cookie-uri', href: '#' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props: SVGProps) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (props: SVGProps) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props: SVGProps) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
    ],
  };

  return (
    <>
      <footer className="bg-black relative overflow-hidden" aria-labelledby="footer-heading">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
        
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 sm:pb-12 sm:pt-16 lg:px-8 lg:pt-24">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-6 sm:space-y-8">
              <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#017AFF] to-blue-400">VerifyPro</span>
              <div className="text-xs sm:text-sm leading-6 text-gray-300">
                Verificarea IMEI-ului iPhone simplu și rapid, pentru achiziții sigure.
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center text-xs sm:text-sm text-gray-300">
                  <span className="mr-2 relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-green-500"></span>
                  </span>
                  Toate serverele sunt online
                </span>
              </div>
              <div className="flex space-x-4 sm:space-x-6">
                {navigation.social.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    className="text-gray-400 hover:text-[#017AFF] hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-8 xl:col-span-2 xl:mt-0">
              <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold leading-6 text-[#017AFF]">Soluții</h3>
                  <ul role="list" className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a 
                          href={item.href} 
                          className="text-xs sm:text-sm leading-6 text-gray-300 hover:text-white relative group"
                        >
                          <span className="relative z-10">{item.name}</span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#017AFF] group-hover:w-full transition-all duration-300"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 md:mt-0">
                  <h3 className="text-xs sm:text-sm font-semibold leading-6 text-[#017AFF]">Suport</h3>
                  <ul role="list" className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a 
                          href={item.href} 
                          className="text-xs sm:text-sm leading-6 text-gray-300 hover:text-white relative group"
                        >
                          <span className="relative z-10">{item.name}</span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#017AFF] group-hover:w-full transition-all duration-300"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold leading-6 text-[#017AFF]">Companie</h3>
                  <ul role="list" className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a 
                          href={item.href} 
                          className="text-xs sm:text-sm leading-6 text-gray-300 hover:text-white relative group"
                        >
                          <span className="relative z-10">{item.name}</span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#017AFF] group-hover:w-full transition-all duration-300"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 md:mt-0">
                  <h3 className="text-xs sm:text-sm font-semibold leading-6 text-[#017AFF]">Legal</h3>
                  <ul role="list" className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a 
                          href={item.href} 
                          className="text-xs sm:text-sm leading-6 text-gray-300 hover:text-white relative group"
                        >
                          <span className="relative z-10">{item.name}</span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#017AFF] group-hover:w-full transition-all duration-300"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-900/10 pt-6 sm:mt-16 sm:pt-8 lg:mt-20">
            <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
              <div className="text-[10px] sm:text-xs leading-5 text-gray-400">
                &copy; {new Date().getFullYear()} VerifyPro. Toate drepturile rezervate.
              </div>
              <div className="text-[10px] sm:text-xs leading-5 text-gray-400">
                Made with <span className="text-red-500">❤️</span> in <span className="text-blue-500">Ro</span><span className="text-yellow-500">mâ</span><span className="text-red-500">nia</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 