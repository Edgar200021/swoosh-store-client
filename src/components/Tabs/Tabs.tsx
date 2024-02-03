import {ReactNode, useState} from "react";
import {Button} from "@/components/ui/Button.tsx";
import {cn} from "@/helpers/cn.ts";

interface Props {
	className?: string
	tabsInfo: {tabTitle: string, tabContent: ReactNode}[]
}

export const Tabs = ({className, tabsInfo}:Props) => {
		const [activeTab, setActiveTab] = useState(tabsInfo[0].tabTitle)

	return <div className={cn('', className)}>
		<div className="flex items-center flex-wrap gap-x-[50px] mb-10">
			{tabsInfo.map(({tabTitle}) => <Button  className={cn('text-[#808080] uppercase text-[15px] font-medium transition-colors duration-300 ease',{
				'text-black': tabTitle === activeTab
			})} key={tabTitle} onClick={() => setActiveTab(tabTitle)} variant='clear'>{tabTitle}</Button>)}
		</div>
			{tabsInfo.map(({tabTitle, tabContent}) => tabTitle === activeTab && <div key={tabTitle}>{tabContent}</div>)}
	</div>
}