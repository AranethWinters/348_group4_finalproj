import React from 'react';
import Link from 'next/link';

const SmallCardList = ({ title, description, imageUrl, price, link }) => (
    <Link href={link} className="max-w-[300px] rounded overflow-hidden shadow-lg bg-white border border-gray-200 block hover:shadow-xl transition-shadow" >
        <img src={imageUrl} alt={title} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <p className="text-gray-900 font-bold mt-2">Price: ${price}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#game</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#price</span>
        </div>
    </Link>
);


const SmallCardList = () => {
    const cards = [
        {
            title: 'Game 1',
            description: 'An exciting adventure game full of challenges.',
            imageUrl: "https://picsum.photos/300",
            price: '29.99',
            link: '/game-1', // Example link
        },
        {
            title: 'Game 2',
            description: 'A fast-paced racing game with stunning graphics.',
            imageUrl: "https://picsum.photos/300",
            price: '19.99',
            link: '/game-2', // Example link
        },
        {
            title: 'Game 3',
            description: 'A strategic puzzle game for all ages.',
            imageUrl: "https://picsum.photos/300",
            price: '14.99',
            link: '/game-3', // Example link
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    price={card.price}
                    link={card.link}
                />
            ))}
        </div>
    );
};

export default SmallCardList;