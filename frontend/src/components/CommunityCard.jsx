import React from 'react'
const community = [{
    name: "ADULTS",
    link: "",
    image: "https://tse1.mm.bing.net/th?id=OIP.mlwA7lgUMgkz0elWFLpeWwHaE8&pid=Api&P=0&h=220",
    description: "Community is a community of people who share their knowledge and expertise with the Church of Jesus Christ of Latter-day Saints.",
},
{
    name: "STUDENTS",
    link: "",
    image: "https://tse1.mm.bing.net/th?id=OIP.mlwA7lgUMgkz0elWFLpeWwHaE8&pid=Api&P=0&h=220",
    description: "Community is a community of people who share their knowledge and expertise with the Church of Jesus Christ of Latter-day Saints.",
},
{
    name: "FAITHKIDS",
    link: "",
    image: "https://tse1.mm.bing.net/th?id=OIP.mlwA7lgUMgkz0elWFLpeWwHaE8&pid=Api&P=0&h=220",
    description: "Community is a community of people who share their knowledge and expertise with the Church of Jesus Christ of Latter-day Saints.",
}
]
const CommunityCard = () => {
    let comm = community.map((community, index) => <div key={index}>
        <img src={community.image}/>
        <h1>{community.name}</h1>
        <p>{community.description}</p>
    </div>)
  return (
    <div>
        {comm}
    </div>
  )
}

export default CommunityCard