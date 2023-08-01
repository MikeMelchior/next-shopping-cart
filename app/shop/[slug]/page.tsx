export default function page ({ params }: { params: { slug: string }}) {
  return (
    <div>Item: {params.slug}</div>
  )
}