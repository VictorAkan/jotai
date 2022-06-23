import { atomWithImmer } from 'jotai/immer'
import { useAtom } from 'jotai'

const countAtom = atomWithImmer(0)

export default function Count() {
    const [count, setCount] = useAtom(countAtom)
    const incrementCount = () => {
        setCount((c) => c + 1)
    }
    return(
        <div className='container d-md-flex justify-content-center mt-5'>
            <button className="btn btn-light text-dark me-3" onClick={incrementCount}>Increment</button>
            <h1>{count}</h1>
        </div>
    )
}