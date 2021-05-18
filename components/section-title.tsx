type Props = {
  children: React.ReactNode
}

const SectionTitle = ({ children }: Props) => {
  return (
    <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
      {children}
    </h2>
  )
}

export default SectionTitle