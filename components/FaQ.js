import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import WorkContactHeader from "./WorkContactHeader";

const data = {
    rows: [
        {
            title: <p className="regular-font">1. What if I am not able to continue this schedule consistently?</p>,
            content: <p className="regular-font">For the body requirements, know your needs for the body. If you are dedicated for yourself, you can achieve everything in life. Stay motivated and connected to the beauty of the nature. For the same, to achieve the best, you need to sacrifice something.</p>,
        },
        {
            title: <p className="regular-font">2. What if I am lacking the inner will to change my routine and eating medicines seems an easier alternative to me?</p>,
            content:
            <p className="regular-font">First, no need to worry about it. No need to stress on self. Our body needs time to adapt new changes. It's a slow-by-slow process which you need to take care about. Give time to be adapted for the changes. We all get encountered by the distractions and the easy ways or the short cuts to lead the life. Just say yourself that you can do it and give a shot and blast it. Set small changes to get leveled up for the process. WE ARE THERE TO SUPPORT YOU, THAT’S NOT AN OPTION, ITS OUR INABILITY YO FACE THE TRUTH</p>
        },
        {
            title: <p className="regular-font">3. How can we adjust our body with the clock of nature? </p>,
            content: <p className="regular-font">You need to listen and communicate, and if you were raised in the Western world, that probably doesn’t come naturally. So, the first step to developing your spiritual relationship with Nature is committing to doing so Adapt yourself to the rhythm of the nature. First step to the healthy lifestyle is to adopt the phrase "Early to bed, early to rise". Just feel the clock process of the nature and try to indulge in it as well. It's a beautiful journey for sure.</p>,
        },
        {
            title: <p className="regular-font">4. What panchabhuta means? </p>,
            content: <p className="regular-font">A group of five basic elements, which, according to Hinduism, is the basis of all cosmic creation. These elements are: Prithvi/Bhudevi, Apas/Varuna/Jal, Agni, Vayu, Akasha/Dyaus.</p>,
        },
        {
            title: <p className="regular-font">5. Can the whole process cure our mental wounds?</p>,
            content: <p className="regular-font">Yes, THE TREATMENT ITSELF BALANCES OUR EMOTIONS TOO.it includes yoga and meditation as a mental exercise which boost our brain and controls our emotions too.</p>,
        },
        {
            title: <p className="regular-font">6. Life without medicines -is it possible?</p>,
            content: <p className="regular-font">If you are dreaming of having life without medications, then you are on right track. Fortunately, it is possible to have such a lifestyle. I AM LIVING IT FROM 5+ years</p>,
        },
    ],
};

const styles = {
    bgColor: '#F8F6F4',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    arrowColor: "#5D9C59",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

const FaQ = ()=> {

    return (
        <div id="faq" className="mx-5 sm:mx-20 mt-20 light-grey p-5 sm:p-10">
           <h3 className="text-2xl mb-5 head-font">FAQ</h3>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}

export default FaQ;