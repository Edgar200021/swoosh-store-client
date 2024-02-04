import {
	createContext,
	Dispatch,
	ReactElement,
	ReactNode,
	RefObject,
	SetStateAction,
	useCallback,
	useContext,
	useState
} from "react";
import {createPortal} from "react-dom";
import {cn} from "@/helpers/cn.ts";
import {Button} from "@/components/ui/Button.tsx";
import {useOutsideClick} from "@/hooks/useOutsideClick.ts";


const ModalContext = createContext<{modalName: string, setModalName: Dispatch<SetStateAction<string>> } | null>(null)

interface Props {
	children: ReactNode
}

export const Modal = ({children}: Props) => {
	const [modalName, setModalName] = useState('')


	return <ModalContext.Provider value={{setModalName, modalName}}>
		{children}
	</ModalContext.Provider>
}

interface OpenProps {
	renderTrigger: (fn: (modalName:string) => void) => ReactElement
}
 const Open = ({renderTrigger}: OpenProps) => {
	const {setModalName} = useModal()

		const openFn = useCallback ((modalName: string) => {
			setModalName(modalName)
			document.body.style.overflow = 'hidden'
		}, [])


	return renderTrigger(openFn)
}

interface ContentProps {
	className?: string
	currentModalName: string
	renderContent: (closeFn: () => void) => ReactElement
}
const Content = ({currentModalName, renderContent, className}: ContentProps) => {
	const {setModalName, modalName} = useModal()
	const closeFn = useCallback(() => {
		setModalName("")
		document.body.style.overflow = 'auto'
	},[])
	const ref = useOutsideClick<HTMLDivElement>(closeFn)



	if (currentModalName !== modalName) return null
	return createPortal(<div className={cn('min-h-[100svh] flex justify-center items-center w-full fixed top-0 left-0 bg-black/90 backdrop-blur-[1px] z-[100] px-10 phone:px-5 py-5 ', className)}>
		<div ref={ref as RefObject<HTMLDivElement>} className="p-10 bg-white tablet:p-6 relative overflow-y-auto max-h-[100svh] ">
			<Button onClick={closeFn} variant='clear'  className='absolute right-5 top-5'>X</Button>
			{renderContent(closeFn)}
		</div>
	</div>, document.body)


}

Modal.Open = Open
Modal.Content = Content

function useModal() {
	const context = useContext(ModalContext)
	if (!context) throw new Error('Ошибка: Попытка доступа к контексту за пределами провайдера. Убедитесь, что компонент, пытающийся получить доступ к контексту, находится внутри дерева, обернутого провайдером контекста.')

	return context
}



