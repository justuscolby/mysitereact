function Section() {
  let sections = [
    {
      key: 1,
      img: 'src/images/tree1.jpg',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
      key: 2,
      img: 'src/images/tree2.jpg',
      text: 'This tree is red.',
    },
    {
      key: 3,
      img: 'src/images/tree3.jpg',
      text: 'Beatae exercitationem sint iste numquam tempora. Aperiam, unde.',
    },
  ]

  return (
    <div>
      {sections.map((section) => (
        <section className="container" key={section.key}>
          <img src={section.img} alt="bruh" />
          <p>{section.text}</p>
        </section>
      ))}
    </div>
  )
}
export default Section
