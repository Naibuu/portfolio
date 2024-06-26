import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Socials } from '~/data/socials'

export default function Contact() {
    return (
        <div className="flex justify-center items-center gap-6 max-sm:flex-col max-sm:items-start max-sm:gap-2">
            {Socials.map((item, index) => (
                <a
                    key={index}
                    href={item.url}
                    className="flex items-center gap-1 text-neutral-200 font-medium"
                >
                    <FontAwesomeIcon icon={item.icon} width={24} height={24} />

                    {item.text}
                </a>
            ))}
        </div>
    )
}
