const email = {
    name: 'Email',
    href: 'mailto:avdn.dev@outlook.com',
    icon: (props) => (
        <svg fill="#FFF" viewBox="0 0 24.00 24.00" {...props}>
            <g>
                <path
                    d="M22,8.32V18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V8.69L4,9.78l7.52,4.1A1,1,0,0,0,12,14a1,1,0,0,0,.5-.14L20,9.49Z"/>
                <path
                    d="M22,6h0L20,7.18l-8,4.67L4,7.5,2,6.4V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6Z"/>
            </g>
        </svg>
    ),
}

export default function Email() {
    return (
        <a key={email.name} href={email.href}>
            <span className="sr-only">{email.name}</span>
            <email.icon className="h-8 w-auto enlarge" aria-hidden="true"/>
        </a>
    )
}