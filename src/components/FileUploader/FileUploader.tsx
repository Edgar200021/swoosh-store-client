import sprites from '../../assets/icons/sprite.svg'
import {cn} from "../../helpers/cn.ts";
import {Button} from "../ui/Button.tsx";
import {ComponentProps, DragEvent, memo, MutableRefObject, useRef, useState,} from 'react'

interface Props extends ComponentProps<'input'> {
  className?: string
  shareFile?: (file: File | FileList) => void
  supportedFiles?: string[]
}

export const FileUploader = memo(({
                                    className,
                                    shareFile,
                                    supportedFiles = ['JPEG', "PNG", "AVIF", 'SVG'],
                                    multiple,
                                    ...otherProps
                                  }: Props) => {
  const [dragActive, setDragActive] = useState(false)
  const ref = useRef<HTMLInputElement>()


  function handleOpenFile() {
    ref.current?.click()
  }

  function handleDragEnter(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setDragActive(true)
  }

  function handleDragLeave(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setDragActive(false)
  }

  function handleDragDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setDragActive(false)
    shareFile?.(multiple ? e.dataTransfer.files : e.dataTransfer.files[0])
  }


  return (
      <div className={cn('max-w-[500px] w-full', className)}>
        <div onDrop={handleDragDrop} onDragStart={handleDragEnter} onDragOver={handleDragEnter}
             onDragLeave={handleDragLeave}
             className='bg-slate-200 border-dashed border-[1px] border-black p-10 flex flex-col items-center justify-center text-center'>
          <svg
              className='w-16  h-16 mb-6 opacity-90 stroke-black group-hover:stroke-white transition-colors duration-300 ease'>
            <use xlinkHref={`${sprites}#upload`}/>
          </svg>

          {dragActive ? <span>Отпустите файл, чтобы загружить</span> : <>
                    <span className='mb-[10px]'>Перетаскивайте файлы или <Button type='button' onClick={handleOpenFile}
                                                                                 className='underline'
                                                                                 variant='clear'> Загружите</Button></span>
            <span>Поддерживаемые форматы: {supportedFiles.map(f => f.toUpperCase()).join(', ')}</span></>}

          <input onChange={e => e.target.files && shareFile?.(multiple ? e.target.files : e.target.files[0])}
                 ref={ref as MutableRefObject<HTMLInputElement>} multiple={multiple} {...otherProps} type="file"
                 className='hidden'/>
        </div>
      </div>
  );
})
