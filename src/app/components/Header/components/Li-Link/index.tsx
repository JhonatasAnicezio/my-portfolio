interface PropsLiLink {
    id: string,
}

export default function LiLink({ id }: PropsLiLink) {
    return (
        <li>
            <a
                className="text-base font-medium line-through"
                href={`#${id.split(',')[0]}`}
            >
                {id}
            </a>
        </li>
    )
}