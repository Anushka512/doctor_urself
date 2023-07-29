
import Heading from "./Heading";
import Image from "next/image";

const Testimonials = () => {
  const data = [
    {
      gridlg: "grid-cols-3",
      img: "assets/t-img.png",
      img1: "assets/t1.png",
      img2: "assets/t2.png",
      img3: "assets/t3.png",
      name: "Priya R",
      des: "I have been consulting Mrs. Deepta since Nov. 2019. Though there was no specific problem or ailment , I went to her for weight Reduction and to be Healthy. I Came to know about Deepta through my friend who was taking treatment for Diabetes.After taking treatment from Deepta, I have learnt many things like the nutritional value Present in food we take, how to chew and eat, sense of hunger and thirst. The importance of fruits and raw vegetables in our daily routine. I learnt	how to control on my cravings to eat junk food,  to eat my food only when hungry or rather when the body needs .I would also like to share that during Nov.2020 when the covid cases were at the peak, I suddenly Lost smell and taste followed by light fever. That time Deepta held my hands and made me realise that our body has the resistance to Heal by itself without any medication. Like wise I could smell and taste after three days and I was normal.By following this life style I am able to judge what to eat and when to eat.I am glad and happy that I met Deepta who taught me to lead a healthy life .I would certainly recommend my friends and relatives so that even they can be healthy and by that way giving opportunity to Deepta in serving the society and help the mankind.",
    },
    {
      gridlg: "grid-cols-2",
      img: "assets/t-img2.png",
      img1: "assets/t4.png",
      img2: "assets/t5.png",
       
      name: "Sanjay K S",
      des: "I came to know about this traditional treatment through one of my friend, for weight loss purpose . I discover that acupuncture therapy was also one of a way to reduce weight so I just wanted to try, through my friends recommendation I Visited Deepta, She made me feel comfortable and enhanced my knowledge about the therapy. I started this treatment in 2019 which Continued for  3months, once I started the treatment I realised that this therapy was not just about weight less but also how a healthy lifestyle is important Deepta helped me in heading a better life style which gradually resulted in weight les. I was impressed by this treatment and have recommended  many of my friends to consult Deepta, for better health and lifestyle. I an fully grateful to known about this therapy and also I am thankful to Deepta for such excellent guidance.",
    },
    {
      gridlg: "grid-cols-1",
      img: "assets/t-img3.png",
      img1: "assets/t6.png",

      name: "Keeathi",
      des: "I am Keerthi Arvind Aged 38. I started my treatment with Deepta when I was 35 years old. got to know about her through a friend I had Sinus Problem & I wanted to lose weight as well. When I went to Deeptha, I was 56 kgs & within few months I could reduce to 46 kgs through a healthy diet. My Sinus problem was also solved.",
    },
    {
      gridlg: "grid-cols-1",
      img: "assets/t-img4.png",
      img1: "assets/t7.png",

      name: "unknown",
      des: "I started consulting and taking treatment for my ailments Diabetes, Hyper tension, Migraine and acidity, there has been a tremendous change in any food habits. Though I used to take medicines for a period of 10 years, I have stopped all the medications as per Deepta’s instruction,I followed her guidance and changed my food habits which helped me to lose 16 kgs, I still follow the suggestions given by Deepta and it has improved by immune system, I am a foodie and would like to have everything I come across and had Irregular eating habits. Even today I am taking Treatment. I have overcome the problem of Migraine and Acidity.Overall, she has been a very good motivator and has shown me a better way of looking at life and health. I thank her for all the support and to lead a happy and healthy life.",
    },
    {
      gridlg: "grid-cols-1",
      img: "assets/t-img5.png",
      img1: "assets/t8.png",

      name: "Bavana M A",
      des: "I am Bavana M A residing in Girinagar from the time I started consulting and taking treatment for my ailments Diabetes, Hyper tension, Migraine and acidity, there has been a tremendous change in any food habits. Though I used to take medicines for a period of 10 years, I have stopped all the medications as per Deepta’s instruction,I followed her guidance and changed my food habits which helped me to lose 16 kgs, I still follow the suggestions given by Deepta and it has improved by immune system, I am a foodie and would like to have everything I come across and had Irregular eating habits. Even today I am taking Treatment. I have overcome the problem of Migraine and Acidity.Overall, she has been a very good motivator and has shown me a better way of looking at life and health. I thank her for all the support and to lead a happy and healthy life.",
    },
    {
      gridlg: "grid-cols-2",
      img: "assets/t-img6.png",
      img1: "assets/t9.png",
      img2: "assets/t10.png",

      name: "Madhu Ramaswamy",
      des: "I started the treatment on Sept -1 2018 and I was taking 8 tablets. Slowly I stopped all the tablets stepping down the doses in 2 months. I also left habits like Smoking, coffee, tea, milk & buttermilk. One year later had elimination through my legs below the knees. It reduced in 6- 8 months with your treatment. Later in Feb developed vee zing. I used to have vee zing only during night times for I hour. The treatment is going on and I am improving.",
    },
    {
      gridlg: "grid-cols-1",
      img: "assets/t-img7.png",
      img1: "assets/t11.png",

      name: "unknown",
      des: "I started consulting and taking treatment for my ailments Diabetes, Hyper tension, Migraine and acidity, there has been a tremendous change in any food habits. Though I used to take medicines for a period of 10 years, I have stopped all the medications as per Deepta’s instruction,I followed her guidance and changed my food habits which helped me to lose 16 kgs, I still follow the suggestions given by Deepta and it has improved by immune system, I am a foodie and would like to have everything I come across and had Irregular eating habits. Even today I am taking Treatment. I have overcome the problem of Migraine and Acidity.Overall, she has been a very good motivator and has shown me a better way of looking at life and health. I thank her for all the support and to lead a happy and healthy life.",
    },
    {
      gridlg: "hidden",
      img: "assets/t-img8.png",
     

      name: " Ashwini Belmar",
      des: "Hi dear friends, I'm Ashwini Belmar here. I am a Reiki healer and practitioner from 10years and was a Psoriasis patient until I met My dear friend, guide,healer, mentor and Guru Deepta last year June.I started initial body healing process with Deepta and was able to analyse and understand exactly what my body needs, in the form of eating food or drinking water only when needed.I was able to cure/heal first n foremost Taunsilitis forever which was in me since childhood in a very easy way by just following what Deepta guided me. This was in the month of August .Then came the Dreadful (as i always thought)Psoriasis lession which erupted like a volcano in the month of October all over my body this time. I had psoriasis for the past 30years and usually the lession becomes more in the winter/ rainy season. I have taken Allopathy, Homeopathy and Ayurvedic medicines for treating it. I used to get immediate relief with applications and in the form of tablets which had minimum steroids also. But again I would get it every year.This time it was WORSE as it was on my both hands,legs, stomach,buttocks ,thighs and even on my foot too.It was Unbearable and just HELL is what I can say. Pain::I couldn't bear the pain at all and couldn't even wear clothes. I used to feel prick everywhere in my body. Couldn't have bath. I had severe itching and burning sensation and discomfort in wearing clothes and couldn't sleep for almost a month. But I had committed to myself that I have to cure/ heal this forever and ever and enjoy my life without any medications hereafter.So , even though it was Painful i managed to stay on Fruits and vegetable soup for 48days and complete Bedrest. I could notice the way the skin was changing every day. Atleast 1/4th of my dustbin was filled with the skin peel . I was crying everyday with burning sensation and pricking sensation. Sometime it bleeded too. I have been completely RECOVERED from the ailment from January 2023.It started on 22 Oct 22 and i am very Happy to say that m free from Psoriasis forever and ever ☺.Lessons i learnt from this experience: 1. I am only responsible for my Karma and i only have to go through it to release it. 2. I learnt to observe and have patience n trust in the process.Result::Unbelievable. Yes, i had never ever thought that my skin ailment could be cured without any medications for ever. But, i did it with lot of effort, dedication and Will Power.I am Successful and Winner now.Thank you so much Deepta for your guidance and strong support.",
    },
  ];
  return (
    <div>
      <Heading
        title="Testimonials"
        des="Traditional Acupuncture"
      />
      {data.map((item) => (
        <div>
          <div
            className="my-10"
            style={{
              backgroundImage: "url('assets/t-bg.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex justify-center ">
              <Image width={500} height={500} src={item.img} alt="" />
            </div>
            <p className="text-center text-3xl mt-3 text-extrabold">
              {item.name}
            </p>
          </div>
          <div className={`grid lg:${item.gridlg}  justify-items-center`}>
            <Image width={300} height={300} src={item.img1} alt="" />
            <Image width={300} height={300} src={item.img2} alt="" className={!item.img2 && "hidden"} />
            <Image width={300} height={300} src={item.img3} alt=""
             className={!item.img3 && "hidden"} />
          </div>
          <div className="flex justify-center">
            <p className="lg:w-1/2 my-10 px-5">{item.des}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
