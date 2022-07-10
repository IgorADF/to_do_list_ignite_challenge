import logoImg from "../../assets/Logo.svg"

export function Header() {
  return (
    <header className="w-full min-h-[200px] bg-app-header flex justify-center items-center">
      <img src={logoImg} alt="Logo" className="relative bottom-[8px] w-[126px] h-[48px]" />
    </header>
  )
}
