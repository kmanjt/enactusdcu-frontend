import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TfiEmail} from 'react-icons/tfi';
import { FaTwitterSquare } from 'react-icons/fa';

const features = [
  {
    name: '@enactusdcu',
    link:
      'https://www.instagram.com/enactusdcu/?hl=en',
    icon: BsInstagram,
  },
  {
    name: '@enactusdcu',
    link:
        'https://www.linkedin.com/company/enactus-dcu?originalSubdomain=ie',
    icon: BsLinkedin,
  },
  {
    name: '@enactusdcu',
    link:
      'https://twitter.com/enactusdcu?lang=en',
    icon: FaTwitterSquare,
  },
  {
    name: 'enactusdcu@gmail.com',
    link:
        'mailto:enactusdcu@gmail.com',
    icon: TfiEmail,
  },
]

export default function Contact() {
  return (
    <div id="contact" className="p-6">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Get in touch!
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Curious to learn more find us on social media or send us an email!
          </p>
        </div>

        <div className="mt-10 mb-12 mx-auto items-center justify-center flex">
          <dl className="mx-auto space-y-10 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-12 md:space-y-0">
            {features.map((feature) => (
              <div key={feature} className="relative">
                <dt>
                    <a href={feature.link} target="blank">
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-10 text-gray-900">{feature.name}</p>
                  </a>
                </dt>
                
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
