import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewsItem from './NewsItem';

class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Arvind Kejriwal: AAP's Vote Share Up In Gujarat Since Raid On Manish Sisodia - NDTV",
            "description": "Delhi Chief Minister Arvind Kejriwal took a swipe at the BJP today over the CBI action on his deputy Manish Sisodia as a plan by the centre to hurt the Aam Aadmi Party, but one that will backfire.",
            "url": "https://www.ndtv.com/india-news/arvind-kejriwal-aaps-vote-share-up-by-4-in-gujarat-since-cbi-raid-on-manish-sisodia-will-increase-by-6-when-hes-arrested-3305803",
            "urlToImage": "https://c.ndtvimg.com/2022-09/fse1assg_arvind-kejriwal-manish-sisodia_650x400_01_September_22.jpg",
            "publishedAt": "2022-09-01T08:26:37Z",
            "content": "Arvind Kejriwal took a swipe at the centre over CBI action on Manish Sisodia\r\nNew Delhi: Delhi Chief Minister Arvind Kejriwal took a swipe at the BJP today over the CBI action on his deputy Manish Si… [+1805 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Tech Desk",
            "title": "Apple releases critical iOS 12 security update for older iPhone 5s, 6 and iPads - The Indian Express",
            "description": "Apple recently released iOS 12.5.6 update that patches a security vulnerability on older iPhones and iPads.",
            "url": "https://indianexpress.com/article/technology/mobile-tabs/apple-releases-ios-12-security-update-for-older-iphones-and-ipads-8124568/",
            "urlToImage": "https://images.indianexpress.com/2022/09/Apple.jpg",
            "publishedAt": "2022-09-01T08:01:58Z",
            "content": "Last month, Apple released iOS 15.6.1 update to fix zero-day exploits asking all iPad and iPhone users to update their devices to the latest version. Now, the Cupertino-based tech giant has released … [+1373 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biospectrumindia.com"
            },
            "author": null,
            "title": "Doctors deliberate on required dedicated mission to tackle NCDs - BSI bureau",
            "description": "The doctors were attending Health4all episode-46 organised by HEAL Foundation",
            "url": "https://www.biospectrumindia.com/news/79/21896/doctors-deliberate-on-required-dedicated-mission-to-tackle-ncds.html",
            "urlToImage": "https://www.biospectrumindia.com/uploads/articles/cardiovascular-21896.jpg",
            "publishedAt": "2022-09-01T07:53:20Z",
            "content": "A galaxy of Padma Awardee doctors deliberated on the health issues that the Indian population is up against, such as diabetes, cardiovascular diseases (CVDs), eye care, and other NCDs during Health4a… [+1614 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "For Terrorist Dawood Ibrahim, Anti-Terror Agency NIA Announces Rs 25 Lakh Bounty - NDTV",
            "description": "India's top anti-terror body has announced a Rs 25-lakh reward for giving information on \"global terrorist\" Dawood Ibrahim and released a new photo of him.",
            "url": "https://www.ndtv.com/india-news/for-terrorist-dawood-ibrahim-anti-terror-agency-nia-announces-rs-25-lakh-bounty-3305390",
            "urlToImage": "https://c.ndtvimg.com/2022-05/otcfh25g_dawood-ibrahim_625x300_10_May_22.jpg",
            "publishedAt": "2022-09-01T07:42:00Z",
            "content": "The NIA has announced a Rs 25-lakh bounty on Dawood Ibrahim\r\nNew Delhi: India's top anti-terror body has announced a Rs 25-lakh reward for giving information on \"global terrorist\" Dawood Ibrahim and … [+1837 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Watch: Suryakumar can't stop laughing at Pakistan journo's Rahul-Rohit question - Hindustan Times",
            "description": "Suryakumar Yadav could not stop laughing when a Pakistani journalist asked whether he would be opening the batting with Rohit Sharma in the next round of Asia Cup like he had done in the West Indies tour. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/watch-suryakumar-yadav-can-t-stop-laughing-at-pakistan-journalist-s-question-on-rohit-sharma-kl-rahul-opening-101662014888565.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/09/01/1600x900/surya_alughter_1662015256906_1662015264330_1662015264330.jpg",
            "publishedAt": "2022-09-01T06:58:17Z",
            "content": "Indian stalwarts KL Rahul and Virat Kohli, the former in particular - were finding it difficult to hit the big shots against Hong Kong. India were going at about 7 runs per over in their last Group A… [+2610 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Diabetes Surgery Offers Freedom From Daily Needle Pricks Insulin Injections And Lifelong Medications | Th - TheHealthSite",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiswFodHRwczovL3d3dy50aGVoZWFsdGhzaXRlLmNvbS9kaXNlYXNlcy1jb25kaXRpb25zL2RpYWJldGVzL2RpYWJldGVzLXN1cmdlcnktaXMtYXMtZ29vZC1hcy1hLWN1cmUtcGF0aWVudHMtY2FuLXN0b3AtdGFraW5nLXBpbGxzLWluc3VsaW4taW5qZWN0aW9ucy13aXRoaW4tYS13ZWVrLW9mLXN1cmdlcnktOTA1MTIzL9IBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-09-01T06:58:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Pragativadi.com"
            },
            "author": "Pragativadi News Service",
            "title": "Over 50000 Monkeypox Cases Recorded Across World - Pragativadi",
            "description": "Over 50,000 monkeypox cases have been recorded across the world, according to the World Health Organization (WHO) data.However, the transmission is slowing in the virus hotspots of Europe and the United States, said the WHO.The World Health Organizat",
            "url": "https://pragativadi.com/over-50000-monkeypox-cases-recorded-across-world/",
            "urlToImage": "https://pragativadi.com/wp-content/uploads/2022/06/ssss.jpg",
            "publishedAt": "2022-09-01T06:57:04Z",
            "content": "Over 50,000 monkeypox cases have been recorded across the world, according to the World Health Organization (WHO) data.\r\nHowever, the transmission is slowing in the virus hotspots of Europe and the U… [+1001 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Cervical cancer: India's first indigenously developed vaccine to be launched today - The Economic Times",
            "description": "India's first indigenously developed quadrivalent Human Papilloma Virus (HPV) vaccine for the prevention of cervical cancer will be launched here on Thursday...",
            "url": "https://www.youtube.com/watch?v=Ob0G8r3Rz70",
            "urlToImage": "https://i.ytimg.com/vi/Ob0G8r3Rz70/hqdefault.jpg",
            "publishedAt": "2022-09-01T06:43:30Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Zee Business"
            },
            "author": "ZeeBiz WebTeam",
            "title": "What is Artemis Mission and from where NASA got name for Moon launch mission? Explained - Zee Business",
            "description": "Artemis Goddess NASA: NASAs latest mission to the Moon --Artemis-- is named after an ancient lunar goddess, the twin sister of Apollo.",
            "url": "https://www.zeebiz.com/world/news-artemis-goddess-nasa-mission-names-moon-rocket-artemis-1-launch-facts-explained-news-196825",
            "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2022/09/01/197979-gfgfgrdfbfb.jpg",
            "publishedAt": "2022-09-01T06:40:03Z",
            "content": "Artemis Mission, Artemis Goddess: NASA has a long history of naming its missions after mythological figures. Starting in the 1950s, many rockets and launch systems were named after Greek sky deities,… [+1882 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "91mobiles"
            },
            "author": null,
            "title": "Samsung Galaxy Z Flip4 vs Samsung Galaxy Z Flip3: what’s changed? - 91mobiles",
            "description": null,
            "url": "https://www.91mobiles.com/hub/samsung-galaxy-z-flip4-vs-samsung-galaxy-z-flip3/",
            "urlToImage": "https://www.91-cdn.com/hub/wp-content/uploads/2022/09/Samsung-Galaxy-Z-Flip3-vs-Z-Flip4-feat.png",
            "publishedAt": "2022-09-01T06:32:29Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "iPhone 15 Pro to be a POWERHOUSE! Thanks to 3nm TSMC chipset - HT Tech",
            "description": "The iPhone 15 Pro is likely to use the advanced 3nm node for its chipset, which could make it the most powerful phone in 2023.",
            "url": "https://tech.hindustantimes.com/mobile/news/iphone-15-pro-to-be-a-powerhouse-thanks-to-3nm-tsmc-chipset-71662013017548.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2022/09/01/1600x900/iPhone_13_Pro_Max_(7)_1632411404068_1662013270772_1662013270772.jpg",
            "publishedAt": "2022-09-01T06:22:54Z",
            "content": "When it comes to chipset power, the iPhone 14 series this year isn't likely to get any bragging rights. The iPhone 14 is said to use the same A15 Bionic 5nm chip as the iPhone 13 Pro, whereas the iPh… [+1780 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": null,
            "title": "SpaceX bags $1.4 billion deal to launch five Nasa missions to space - India Today",
            "description": "Elon Musks's SpaceX has outpaced Boeing, scoring a $1.4 billion contract to launch 20 astronauts to space.",
            "url": "https://www.indiatoday.in/science/story/spacex-elon-musk-nasa-space-station-astronaut-missions-deal-1995100-2022-09-01",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/SpaceX_Dragon_1-647x363.jpeg?x280hdIuK5wkl5EXI1yKFBBuOTElTIQM",
            "publishedAt": "2022-09-01T06:22:12Z",
            "content": "Elon Musk-led SpaceX has emerged as a reliable option for Nasa to launch humans into space, as it bags a $1.4 billion contract to send five more astronaut missions beyond Earth. The private aerospace… [+2255 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "News Desk",
            "title": "Ganeshotsav Updates: 'Kailash' as Address, '6th Century' for Date of Birth in Unique Aadhaar Pandal of Gane - News18",
            "description": "Ganeshotsav Updates: Maharashtra, which is one of the states where the festival is celebrated with pomp, saw devotees welcome Lord Ganesh in their homes and pooja pandals on Wednesday",
            "url": "https://www.news18.com/news/india/ganeshotsav-updates-ganesh-chaturthi-maharashtra-mumbai-lalbaugcha-raja-siddhivinayak-hubballi-idgah-5864503.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/09/untitled-design-2022-09-01t113735.827-166201307416x9.jpg",
            "publishedAt": "2022-09-01T06:22:00Z",
            "content": "Ganeshotsav Updates: Relatively free of coronavirus-related curbs after two years since the onset of the Covid-19 pandemic, Ganesh Chaturthi was celebrated with religious fervour across states, where… [+6661 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Mamata's ‘RSS not that bad’ remark prompts sharp jibe from Owaisi: In 2003 too.. - Hindustan Times",
            "description": "In a video shared on social media, Mamata Banerjee can be heard saying that there are many “good people” in RSS who “don't support BJP.” | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/on-mamata-rss-not-that-bad-remark-owaisi-hopes-tmc-s-muslim-faces-praise-101662009415554.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/09/01/1600x900/owaisi_mamata_banerjee_rss_not_that_bad_1662012646048_1662012646245_1662012646245.jpg",
            "publishedAt": "2022-09-01T06:13:49Z",
            "content": "All India Majilis-e-Ittehadul Muslimeen (AIMIM) chief Asaduddin Owaisi on Thursday took a swipe at West Bengal chief minister Mamata Banerjee over her recent remarks on the Rashtriya Swayamsevak Sang… [+2074 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Delhi CM vs LG: a Rs 1400 crore war of words - The Indian Express",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiZWh0dHBzOi8vaW5kaWFuZXhwcmVzcy5jb20vYXJ0aWNsZS9wb2xpdGljYWwtcHVsc2UvcnMtMTQwMC1jcm9yZS1zY2FtLWRlbGhpLWxnLWRlbW9uZXRpc2F0aW9uLTgxMjQzOTYv0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-09-01T06:12:57Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "NDTV Sports Desk",
            "title": "\"Sounded Like He Found Himself In Quite A Dark Place\": Ricky Ponting On Virat Kohli - NDTV Sports",
            "description": "Ricky Ponting said that he hopes Virat Kohli would be back among runs during the ICC T20 World Cup later this year in Australia.",
            "url": "https://sports.ndtv.com/asia-cup-2022/sounded-like-he-found-himself-in-quite-a-dark-place-ricky-ponting-on-virat-kohli-3305452",
            "urlToImage": "https://c.ndtvimg.com/2022-09/22vdmisg_virat-kohli-afp_625x300_01_September_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2022-09-01T06:12:26Z",
            "content": "Virat Kohli took a break from international cricket before returning to the Indian side for the Asia Cup 2022. He was rested for the tours of West Indies and Zimbabwe and the former India captain uti… [+1790 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Putin Brings India And China To Russia For War Games Defying US - NDTV",
            "description": "Russia is holding major military exercises involving China and India as President Vladimir Putin pushes back against attempts by the US and its allies to isolate him over his invasion of Ukraine.",
            "url": "https://www.ndtv.com/india-news/vladimir-putin-brings-india-and-china-to-russia-for-war-games-defying-us-3305413",
            "urlToImage": "https://c.ndtvimg.com/2018-10/eod8732o_putin-modi-pti_625x300_05_October_18.jpg",
            "publishedAt": "2022-09-01T05:36:19Z",
            "content": "India has avoided taking sides over Russia's war in Ukraine.\r\nRussia is holding major military exercises involving China and India as President Vladimir Putin pushes back against attempts by the US a… [+2597 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Koffee With Karan 7: Kriti Sanon Called Prabhas And Instantly Became Twitter's Favourite - NDTV Movies",
            "description": "\"You are amazing, I will call you back after the show,\" Kriti Sanon told Prabhas",
            "url": "https://www.ndtv.com/entertainment/koffee-with-karan-7-kriti-sanon-called-prabhas-and-instantly-became-twitters-favourite-3305410",
            "urlToImage": "https://c.ndtvimg.com/2022-09/60jkj048_kriti-sanon_625x300_01_September_22.jpg",
            "publishedAt": "2022-09-01T05:22:57Z",
            "content": "Kriti and KJo in a still from the show. (courtesy: ivdsai)\r\nNew Delhi: The new episode of Koffee With Karan 7, featuring Kriti Sanon and Tiger Shroff, was all things fun. Be it the Rapid Fire round, … [+2561 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Apple September 7 iPhone 14 launch event: Purple iPhone, Apple Watch Pro, Airpods Pro and everything else to expect - The Financial Express",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMirgFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9pbmR1c3RyeS90ZWNobm9sb2d5L2FwcGxlLXNlcHRlbWJlci03LWlwaG9uZS0xNC1sYXVuY2gtZXZlbnQtcHVycGxlLWlwaG9uZS1hcHBsZS13YXRjaC1wcm8tYWlycG9kcy1wcm8tYW5kLWV2ZXJ5dGhpbmctZWxzZS10by1leHBlY3QvMjY1MTQ1Ni_SAbMBaHR0cHM6Ly93d3cuZmluYW5jaWFsZXhwcmVzcy5jb20vaW5kdXN0cnkvdGVjaG5vbG9neS9hcHBsZS1zZXB0ZW1iZXItNy1pcGhvbmUtMTQtbGF1bmNoLWV2ZW50LXB1cnBsZS1pcGhvbmUtYXBwbGUtd2F0Y2gtcHJvLWFpcnBvZHMtcHJvLWFuZC1ldmVyeXRoaW5nLWVsc2UtdG8tZXhwZWN0LzI2NTE0NTYvbGl0ZS8?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-09-01T05:12:20Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "Aman Sharma",
            "title": "Sanjay Prasad, Yogi's Trusted Aide & Helping Hand During Covid, is Now UP's Most Powerful Bureaucrat - News18",
            "description": "Prasad replaces Navneet Sehgal, who was handling Information as the Additional Chief Secretary and has now been moved to Sports, and Awanish Awasthi, who was handling Home and retired on August 31 after the Centre did not approve his extension",
            "url": "https://www.news18.com/news/india/sanjay-prasad-yogis-trusted-aide-helping-hand-during-covid-is-now-ups-most-powerful-bureaucrat-5865691.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/09/sanjay-prasad-166200796316x9.jpg",
            "publishedAt": "2022-09-01T05:10:06Z",
            "content": "A 1995-batch IAS officer and trusted man of Chief Minister Yogi Adityanath, Sanjay Prasad is now the most powerful bureaucrat in Uttar Pradesh after he was given the charge of key departments of Home… [+2059 chars]"
        }
    ]

    constructor() {
        super();
        this.state = {
            articles: this.articles
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <div className='row'>
                    {
                        this.state.articles.map((element) => {
                           
                            return <div key={element.url} className='col-md-4' ><NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} /></div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default News;