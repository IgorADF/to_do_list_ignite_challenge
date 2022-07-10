import logoImg from "../../assets/Logo.svg"

export function Header() {
  return (
    <header className="w-full h-[200px] bg-app-header flex relative justify-center">
      <img src={logoImg} alt="Logo" className="absolute top-[72px] w-[126px] h-[48px]" />
    </header>
  )
}
