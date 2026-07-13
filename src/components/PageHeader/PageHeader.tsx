import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { Button } from '../Button/Button'

export interface HeaderButton {
  text: string
  link: string
}

export interface PageHeaderProps {
  title: string
  content: string
  button1?: HeaderButton
  button2?: HeaderButton
  metadata?: string
}

export default function PageHeader({
  title,
  content,
  button1,
  button2,
  metadata
}: PageHeaderProps) {
  return (
    <header className="w-full max-w-[1920px] bg-white px-6 md:px-12 lg:px-16 py-10 flex flex-col gap-2 mx-auto border-b border-zinc-200/50">
      {/* Dynamic URL Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Content & Buttons Header Frame */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mt-4">
        {/* Left Side: Title, Description & Meta */}
        <div className="flex flex-col gap-2 max-w-4xl text-left">
          <h1 className="text-[46px] font-semibold leading-[50.6px] tracking-[-0.92px] text-[#0f172a]">
            {title}
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-[23px] font-semibold leading-[28.75px] tracking-[-0.115px] text-[#0369a1]">
              {content}
            </p>
            {metadata && (
              <span className="text-[18px] font-normal leading-[25.2px] text-[#475569]">
                {metadata}
              </span>
            )}
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        {(button1 || button2) && (
          <div className="flex items-center gap-2 mt-4 md:mt-0 shrink-0">
            {button1 && <Button text={button1.text} link={button1.link} variant="primary" />}
            {button2 && <Button text={button2.text} link={button2.link} variant="secondary" />}
          </div>
        )}
      </div>
    </header>
  )
}