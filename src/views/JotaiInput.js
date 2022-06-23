import { atom,useAtom } from "jotai"

const AtomText = atom('Hello')
const UpperCase = atom(
    (get) => get(AtomText).toUpperCase()
)

const Input = () => {
    const [text, setText] = useAtom(AtomText)
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return(
        <div className="container mt-5">
            <input type="text" value={text} onChange={handleChange} className="form-control" />
        </div>
    )
}
const UpperCaseText = () => {
    const [upperCase] = useAtom(UpperCase)
    return(
        <div className="text-center">
            <b>UpperCase:</b> {upperCase}
        </div>
    )
}

export default function JotaiInput() {
    return(
        <div>
            <Input />
            <UpperCaseText />
        </div>
    )
}