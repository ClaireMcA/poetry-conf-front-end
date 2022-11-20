import { ObjectId } from "mongodb";

interface SessionData {
  _id: string;
  title: string;
  start: string;
  end: string;
  desc: string;
  isMulti: boolean;
  bio?: string;
  speaker?: string;
  affiliation?: string;
  location?: string;
}

interface PaperData {
  _id: string;
  title: string;
  start: string;
  end: string;
  desc: string;
  bio?: string;
  speaker?: string;
  affiliation?: string;
}


export const sessionData: SessionData[] = [
  {
    _id:"34124cdc-df79-49c6-9404-c2712b725601",
    title:"Smoke Ceremony",
    start:"2022-12-05T09:45:00",
    end:"2022-12-05T10:15:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:false,
    bio:"Paul Collis is a Barkindji man. He was born in Bourke, in far north/west New South Wales. His early life was informed by Barkindji and Kunya and Murawarri, and Wongamara and Nyempa story tellers and artists, who taught him Aboriginal Culture and Law. Paul worked in Newcastle for much of his young adult life in the areas of teaching and Aboriginal community development. He has taught Aboriginal Studies to Indigenous inmates at the Worimi and Mount Penang juvenile detention centres and in Cessnock and Maitland prisons. He also managed a homeless Aboriginal boys' hostel. Paul earned his Doctorate at University Canberra in 2015, for a study of Barkindji identity with a specific focus on masculinity. His first novel, Dancing Home, won the 2017 David Unaipon Award for a previously unpublished work by an Indigenous author, and the 2019 ACT Book of the year Award. Paul’s first poetry collection, Nightmares Run Like Mercury, was published by Recent Works Press in 2021. Paul is Director, Indigenous Engagement, in the Faculty of Arts and Design at the University of Canberra.",
    speaker:"Wally Bell",
    affiliation:"University of Utah",
    location:"Inspire Centre"
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725602",
    title:"Morning Tea",
    start:"2022-12-05T10:15:00",
    end:"2022-12-05T10:45:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:false,
    bio:"Lindell Bromham is a Professor of Evolutionary Biology at the Australian National University. Her research focusses on connecting evolutionary processes across all levels of change, from the genome to the biosphere, and on developing new ways to answer challenging questions regarding the “tempo and mode” (pace and mechanism) of evolutionary change. Most of her work focusses on molecular evolution (rates and patterns of change in DNA) or macroevolution (processes of biodiversity generation in time and space), but in the past five years, she has extended this general approach to other evolutionary systems, such as language and culture. She has engaged in interdisciplinary research over several decades, working with artists, philosophers, linguists, mathematicians. Lindell was awarded the 2021 Eureka Prize for Interdisciplinary Scientific Research for work in collaboration with linguist, Felicity Meakins, mathematician, Xia Hua and Gurindji woman, Cassandra Algy. Their work focuses on a new Indigenous language emerging from a mix of Gurindji, a traditional language of the Northern Territory, and Kriol, an English-based Creole language widely spoken in northern Australia.",
    speaker:"",
    affiliation:"La Trobe University Melbourne ",
    location:"Building 2, B9"
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725603",
    title:"Welcome to Country",
    start:"2022-12-05T10:45:00",
    end:"2022-12-05T12:00:00",
    desc:"Welcome to Country (Bell) + Opening Reading (Collis), Talk (Bronham) and Performance (TBA)",
    isMulti:false,
    bio:"Christian Bök is the author of Eunoia (2001), a bestselling work of experimental literature, which has gone on to win the Griffin Prize for Poetic Excellence. Bök is currently working on The Xenotext — a project that requires him to encipher a poem into the genome of a deathless bacterium, able to survive in any inhospitable environment, including the vacuum of outer space. Bök is a Fellow in the Royal Society of Canada, and he works as an artist in Melbourne.",
    speaker:"Lindell Bromham",
    affiliation:"Monash University",
    location:"Building 2, Foyer"
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725604",
    title:"Lunch",
    start:"2022-12-05T12:00:00",
    end:"2022-12-05T13:00:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:false,
    bio: "",
    speaker:"",
    affiliation:"University of Utah",
    location:"Building 2, B11"
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725605",
    title:"Session 1",
    start:"2022-12-05T13:00:00",
    end:"2022-12-05T14:30:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:true,
    bio:"Qixiu Tian is a Melbourne-based PhD candidate in Australian literature at La Trobe University. Her project situates different genres of texts, including fiction, poetry, drama, and short stories in the light of Australian decolonizing contemporary writing to determine how the particularized nature of these works confronts and renegotiates Sino-Australia relations from 1980s onwards. It is to continue the exploration as a discovery, a supplement of the process of better knowing the Self and the Other, defying any fixed and totalizing representations of each category.",
    speaker:"Katharine Coles",
    affiliation:"La Trobe University Melbourne ",
    location:"Teal Room"
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725606",
    title:"Afternoon Tea",
    start:"2022-12-05T14:30:00",
    end:"2022-12-05T15:00:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:false,
    bio: "",
    speaker:"",
    affiliation:"",
    location:"Studio"
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725607",
    title:"Session 2",
    start:"2022-12-05T15:00:00",
    end:"2022-12-05T16:30:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:true,
    bio:"Owen Bullock has published three collections of poetry, Work & Play (2017), Semi (2017), Sometimes the Sky Isn’t Big Enough (2010); five books of haiku, Summer Haiku (2019), River’s Edge (2016), Urban Haiku (2015), Breakfast with Epiphanies (2012), Wild Camomile (2009); a bilingual collection of tanka, Uma rocha enorme que anda à roda (‘A big rock that turns around’), translated into Portuguese by Francisco Carvalho (Temas Originais, 2021); the novella, A Cornish Story (2010), and a number of chapbooks of poetry, haiku and haibun. He has a PhD in Creative Writing from the University of Canberra, where he teaches. https://poetry-in-process.com/",
    speaker:"Behnam M. Fomeshi ",
    affiliation:"University of Utah",
    location:"Building 2, Foyer"
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725608",
    title:"Drinks",
    start:"2022-12-05T16:30:00",
    end:"2022-12-05T17:00:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:false,
    bio: "",
    speaker:"",
    affiliation:"",
    location:""
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725609",
    title:"Keynote Poetry Readings",
    start:"2022-12-05T17:00:00",
    end:"2022-12-05T18:30:00",
    desc:" (Van/ Kalytiak-Davis/ Sakr)",
    isMulti:false,
    bio:"Moya Costello has two collections of short creative prose and two short novels published, Kites in Jakarta, and Small Ecstasies; The Office as a Boat, and Harriet Chandler; and a collection of prose poems, pressed specimens She has critical and creative work in scholarly and literary journals and anthologies, and exhibition catalogues. She taught writing in the School of Arts and Social Sciences, Southern Cross University for nine years, and the School of Business and Tourism for five. She has been awarded Australian federal and state government writing grants and fellowships. She currently lives on the lands of the Punnilerpanna/Palawa people (north coast of Tasmania, Australia).",
    speaker:"Paul Collis",
    affiliation:"Monash University",
    location:"Open Space"
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725610",
    title:"Keynote Lecture by Heather Clark",
    start:"2022-12-06T09:30:00",
    end:"2022-12-06T11:00:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:false,
    bio:"Owen Bullock has published three collections of poetry, Work & Play (2017), Semi (2017), Sometimes the Sky Isn’t Big Enough (2010); five books of haiku, Summer Haiku (2019), River’s Edge (2016), Urban Haiku (2015), Breakfast with Epiphanies (2012), Wild Camomile (2009); a bilingual collection of tanka, Uma rocha enorme que anda à roda (‘A big rock that turns around’), translated into Portuguese by Francisco Carvalho (Temas Originais, 2021); the novella, A Cornish Story (2010), and a number of chapbooks of poetry, haiku and haibun. He has a PhD in Creative Writing from the University of Canberra, where he teaches. https://poetry-in-process.com/",
    speaker:"Lindell Bromham",
    affiliation:"University of Utah",
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725611",
    title:"Morning Tea",
    start:"2022-12-06T11:00:00",
    end:"2022-12-06T11:30:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:false,
    bio:"Nathanael O’Reilly is an Irish-Australian poet. He is Assistant Professor of Creative Writing at the University of Texas at Arlington. His books include Boulevard (Beir Bua Press, 2021), (Un)belonging (Recent Work Press, 2020), BLUE (above/ground press, 2020); Preparations for Departure (UWAP, 2017), Distance (Ginninderra Press, 2015) and Symptoms of Homesickness (Picaro Press, 2010). His poetry has appeared in journals and anthologies from fourteen countries, including Anthropocene, Bealtaine, Cordite, The Elevation Review, fourW, In Parentheses: New Modernisms, Mascara, New World Writing, Skylight 47 and Westerly. He is poetry editor for Antipodes: A Global Journal of Australian/New Zealand Literature. ",
    speaker:"Christian Bök",
    affiliation:"La Trobe University Melbourne ",
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725612",
    title:"Session 3",
    start:"2022-12-06T11:30:00",
    end:"2022-12-06T13:00:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:true,
    bio:"Moya Costello has two collections of short creative prose and two short novels published, Kites in Jakarta, and Small Ecstasies; The Office as a Boat, and Harriet Chandler; and a collection of prose poems, pressed specimens She has critical and creative work in scholarly and literary journals and anthologies, and exhibition catalogues. She taught writing in the School of Arts and Social Sciences, Southern Cross University for nine years, and the School of Business and Tourism for five. She has been awarded Australian federal and state government writing grants and fellowships. She currently lives on the lands of the Punnilerpanna/Palawa people (north coast of Tasmania, Australia).",
    speaker:"Katharine Coles",
    affiliation:"Monash University",
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725613",
    title:"Lunch",
    start:"2022-12-06T13:00:00",
    end:"2022-12-06T14:30:00",
    desc:"Lunch + Open Sessions",
    isMulti:false,
    bio:"Paul Collis is a Barkindji man. He was born in Bourke, in far north/west New South Wales. His early life was informed by Barkindji and Kunya and Murawarri, and Wongamara and Nyempa story tellers and artists, who taught him Aboriginal Culture and Law. Paul worked in Newcastle for much of his young adult life in the areas of teaching and Aboriginal community development. He has taught Aboriginal Studies to Indigenous inmates at the Worimi and Mount Penang juvenile detention centres and in Cessnock and Maitland prisons. He also managed a homeless Aboriginal boys' hostel. Paul earned his Doctorate at University Canberra in 2015, for a study of Barkindji identity with a specific focus on masculinity. His first novel, Dancing Home, won the 2017 David Unaipon Award for a previously unpublished work by an Indigenous author, and the 2019 ACT Book of the year Award. Paul’s first poetry collection, Nightmares Run Like Mercury, was published by Recent Works Press in 2021. Paul is Director, Indigenous Engagement, in the Faculty of Arts and Design at the University of Canberra.",
    speaker:"Qixiu Tian ",
    affiliation:"University of Utah",
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725614",
    title:"Session 4",
    start:"2022-12-06T14:30:00",
    end:"2022-12-06T16:00:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:true,
    bio:"Lindell Bromham is a Professor of Evolutionary Biology at the Australian National University. Her research focusses on connecting evolutionary processes across all levels of change, from the genome to the biosphere, and on developing new ways to answer challenging questions regarding the “tempo and mode” (pace and mechanism) of evolutionary change. Most of her work focusses on molecular evolution (rates and patterns of change in DNA) or macroevolution (processes of biodiversity generation in time and space), but in the past five years, she has extended this general approach to other evolutionary systems, such as language and culture. She has engaged in interdisciplinary research over several decades, working with artists, philosophers, linguists, mathematicians. Lindell was awarded the 2021 Eureka Prize for Interdisciplinary Scientific Research for work in collaboration with linguist, Felicity Meakins, mathematician, Xia Hua and Gurindji woman, Cassandra Algy. Their work focuses on a new Indigenous language emerging from a mix of Gurindji, a traditional language of the Northern Territory, and Kriol, an English-based Creole language widely spoken in northern Australia.",
    speaker:"Behnam M. Fomeshi ",
    affiliation:"La Trobe University Melbourne ",
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725615",
    title:"Afternoon Tea",
    start:"2022-12-06T16:00:00",
    end:"2022-12-06T16:30:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:false,
    bio:"Christian Bök is the author of Eunoia (2001), a bestselling work of experimental literature, which has gone on to win the Griffin Prize for Poetic Excellence. Bök is currently working on The Xenotext — a project that requires him to encipher a poem into the genome of a deathless bacterium, able to survive in any inhospitable environment, including the vacuum of outer space. Bök is a Fellow in the Royal Society of Canada, and he works as an artist in Melbourne.",
    speaker:"Wally Bell",
    affiliation:"Monash University",
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725616",
    title:"Poetry and Film Event",
    start:"2022-12-06T16:30:00",
    end:"2022-12-06T18:00:00",
    desc:" Magic Lantern Performance",
    isMulti:false,
    bio:"Katharine Coles’ eighth collection of poems, (Solve for) X, was published in April by Turtle Point Press; her ninth, Ghost Apples, will be out in March from Red Hen Press.  Other recent books include The Stranger I Become: on Walking, Looking, and Writing (essays) and Look Both Ways (memoir).  Utah-based Poet-in-Residence for the Poets House FIELD WORK program, she has received awards from the US’s National Endowment for Arts and National Endowment for the Humanities, the National Science Foundation’s Antarctic Artists and Writers Program, and the Guggenheim Foundation.  She is a Distinguished Professor at the University of Utah.",
    speaker:"Paul Collis",
    affiliation:"University of Utah",
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725617",
    title:"Bus to Dinner",
    start:"2022-12-06T18:30:00",
    end:"2022-12-06T19:00:00",
    desc:"Optional",
    isMulti:false,
    bio:"Paul Collis is a Barkindji man. He was born in Bourke, in far north/west New South Wales. His early life was informed by Barkindji and Kunya and Murawarri, and Wongamara and Nyempa story tellers and artists, who taught him Aboriginal Culture and Law. Paul worked in Newcastle for much of his young adult life in the areas of teaching and Aboriginal community development. He has taught Aboriginal Studies to Indigenous inmates at the Worimi and Mount Penang juvenile detention centres and in Cessnock and Maitland prisons. He also managed a homeless Aboriginal boys' hostel. Paul earned his Doctorate at University Canberra in 2015, for a study of Barkindji identity with a specific focus on masculinity. His first novel, Dancing Home, won the 2017 David Unaipon Award for a previously unpublished work by an Indigenous author, and the 2019 ACT Book of the year Award. Paul’s first poetry collection, Nightmares Run Like Mercury, was published by Recent Works Press in 2021. Paul is Director, Indigenous Engagement, in the Faculty of Arts and Design at the University of Canberra.",
    speaker:"Lindell Bromham",
    affiliation:"La Trobe University Melbourne ",
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725618",
    title:"Conference Dinner",
    start:"2022-12-06T19:00:00",
    end:"2022-12-06T20:30:00",
    desc:"Optional",
    isMulti:false,
    bio:"Lindell Bromham is a Professor of Evolutionary Biology at the Australian National University. Her research focusses on connecting evolutionary processes across all levels of change, from the genome to the biosphere, and on developing new ways to answer challenging questions regarding the “tempo and mode” (pace and mechanism) of evolutionary change. Most of her work focusses on molecular evolution (rates and patterns of change in DNA) or macroevolution (processes of biodiversity generation in time and space), but in the past five years, she has extended this general approach to other evolutionary systems, such as language and culture. She has engaged in interdisciplinary research over several decades, working with artists, philosophers, linguists, mathematicians. Lindell was awarded the 2021 Eureka Prize for Interdisciplinary Scientific Research for work in collaboration with linguist, Felicity Meakins, mathematician, Xia Hua and Gurindji woman, Cassandra Algy. Their work focuses on a new Indigenous language emerging from a mix of Gurindji, a traditional language of the Northern Territory, and Kriol, an English-based Creole language widely spoken in northern Australia.",
    speaker:"Christian Bök",
    affiliation:"Monash University",
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725619",
    title:"Keynote Panel",
    start:"2022-12-07T09:00:00",
    end:"2022-12-07T10:30:00",
    desc:"Poetry and Ordinary Language Philosophy (Clements / McArthur/ Musgrave/ Van)",
    isMulti:false,
    bio:"Christian Bök is the author of Eunoia (2001), a bestselling work of experimental literature, which has gone on to win the Griffin Prize for Poetic Excellence. Bök is currently working on The Xenotext — a project that requires him to encipher a poem into the genome of a deathless bacterium, able to survive in any inhospitable environment, including the vacuum of outer space. Bök is a Fellow in the Royal Society of Canada, and he works as an artist in Melbourne.",
    speaker:"Katharine Coles",
    affiliation:"University of Utah",
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725620",
    title:"Morning Tea",
    start:"2022-12-07T10:30:00",
    end:"2022-12-07T11:00:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:false,
    bio:"Katharine Coles’ eighth collection of poems, (Solve for) X, was published in April by Turtle Point Press; her ninth, Ghost Apples, will be out in March from Red Hen Press.  Other recent books include The Stranger I Become: on Walking, Looking, and Writing (essays) and Look Both Ways (memoir).  Utah-based Poet-in-Residence for the Poets House FIELD WORK program, she has received awards from the US’s National Endowment for Arts and National Endowment for the Humanities, the National Science Foundation’s Antarctic Artists and Writers Program, and the Guggenheim Foundation.  She is a Distinguished Professor at the University of Utah.",
    speaker:"Qixiu Tian ",
    affiliation:"La Trobe University Melbourne ",
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725621",
    title:"Session 5",
    start:"2022-12-07T11:00:00",
    end:"2022-12-07T12:30:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:true,
    bio:"Paul Collis is a Barkindji man. He was born in Bourke, in far north/west New South Wales. His early life was informed by Barkindji and Kunya and Murawarri, and Wongamara and Nyempa story tellers and artists, who taught him Aboriginal Culture and Law. Paul worked in Newcastle for much of his young adult life in the areas of teaching and Aboriginal community development. He has taught Aboriginal Studies to Indigenous inmates at the Worimi and Mount Penang juvenile detention centres and in Cessnock and Maitland prisons. He also managed a homeless Aboriginal boys' hostel. Paul earned his Doctorate at University Canberra in 2015, for a study of Barkindji identity with a specific focus on masculinity. His first novel, Dancing Home, won the 2017 David Unaipon Award for a previously unpublished work by an Indigenous author, and the 2019 ACT Book of the year Award. Paul’s first poetry collection, Nightmares Run Like Mercury, was published by Recent Works Press in 2021. Paul is Director, Indigenous Engagement, in the Faculty of Arts and Design at the University of Canberra.",
    speaker:"Behnam M. Fomeshi ",
    affiliation:"Monash University",
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725622",
    title:"Lunch",
    start:"2022-12-07T12:30:00",
    end:"2022-12-07T13:30:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:false,
    bio:"Lindell Bromham is a Professor of Evolutionary Biology at the Australian National University. Her research focusses on connecting evolutionary processes across all levels of change, from the genome to the biosphere, and on developing new ways to answer challenging questions regarding the “tempo and mode” (pace and mechanism) of evolutionary change. Most of her work focusses on molecular evolution (rates and patterns of change in DNA) or macroevolution (processes of biodiversity generation in time and space), but in the past five years, she has extended this general approach to other evolutionary systems, such as language and culture. She has engaged in interdisciplinary research over several decades, working with artists, philosophers, linguists, mathematicians. Lindell was awarded the 2021 Eureka Prize for Interdisciplinary Scientific Research for work in collaboration with linguist, Felicity Meakins, mathematician, Xia Hua and Gurindji woman, Cassandra Algy. Their work focuses on a new Indigenous language emerging from a mix of Gurindji, a traditional language of the Northern Territory, and Kriol, an English-based Creole language widely spoken in northern Australia.",
    speaker:"Wally Bell",
    affiliation:"University of Utah",
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725623",
    title:"Session 6",
    start:"2022-12-07T13:30:00",
    end:"2022-12-07T15:00:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:true,
    bio:"Christian Bök is the author of Eunoia (2001), a bestselling work of experimental literature, which has gone on to win the Griffin Prize for Poetic Excellence. Bök is currently working on The Xenotext — a project that requires him to encipher a poem into the genome of a deathless bacterium, able to survive in any inhospitable environment, including the vacuum of outer space. Bök is a Fellow in the Royal Society of Canada, and he works as an artist in Melbourne.",
    speaker:"Paul Collis",
    affiliation:"La Trobe University Melbourne ",
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725624",
    title:"Afternoon Tea",
    start:"2022-12-07T15:00:00",
    end:"2022-12-07T15:30:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:false,
    bio:"Katharine Coles’ eighth collection of poems, (Solve for) X, was published in April by Turtle Point Press; her ninth, Ghost Apples, will be out in March from Red Hen Press.  Other recent books include The Stranger I Become: on Walking, Looking, and Writing (essays) and Look Both Ways (memoir).  Utah-based Poet-in-Residence for the Poets House FIELD WORK program, she has received awards from the US’s National Endowment for Arts and National Endowment for the Humanities, the National Science Foundation’s Antarctic Artists and Writers Program, and the Guggenheim Foundation.  She is a Distinguished Professor at the University of Utah.",
    speaker:"Lindell Bromham",
    affiliation:"Monash University",
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725625",
    title:"Session 7",
    start:"2022-12-07T15:30:00",
    end:"2022-12-07T17:00:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:true,
    bio:"Paul Collis is a Barkindji man. He was born in Bourke, in far north/west New South Wales. His early life was informed by Barkindji and Kunya and Murawarri, and Wongamara and Nyempa story tellers and artists, who taught him Aboriginal Culture and Law. Paul worked in Newcastle for much of his young adult life in the areas of teaching and Aboriginal community development. He has taught Aboriginal Studies to Indigenous inmates at the Worimi and Mount Penang juvenile detention centres and in Cessnock and Maitland prisons. He also managed a homeless Aboriginal boys' hostel. Paul earned his Doctorate at University Canberra in 2015, for a study of Barkindji identity with a specific focus on masculinity. His first novel, Dancing Home, won the 2017 David Unaipon Award for a previously unpublished work by an Indigenous author, and the 2019 ACT Book of the year Award. Paul’s first poetry collection, Nightmares Run Like Mercury, was published by Recent Works Press in 2021. Paul is Director, Indigenous Engagement, in the Faculty of Arts and Design at the University of Canberra.",
    speaker:"Christian Bök",
    affiliation:"University of Utah",
},
{
    _id:"34124cdc-df79-49c6-9404-c2712b725626",
    title:"Finnegans Wake 'Funferal'",
    start:"2022-12-07T19:30:00",
    end:"2022-12-07T21:30:00",
    desc:"Test Description to Make sure this is working.",
    isMulti:false,
    bio:"Lindell Bromham is a Professor of Evolutionary Biology at the Australian National University. Her research focusses on connecting evolutionary processes across all levels of change, from the genome to the biosphere, and on developing new ways to answer challenging questions regarding the “tempo and mode” (pace and mechanism) of evolutionary change. Most of her work focusses on molecular evolution (rates and patterns of change in DNA) or macroevolution (processes of biodiversity generation in time and space), but in the past five years, she has extended this general approach to other evolutionary systems, such as language and culture. She has engaged in interdisciplinary research over several decades, working with artists, philosophers, linguists, mathematicians. Lindell was awarded the 2021 Eureka Prize for Interdisciplinary Scientific Research for work in collaboration with linguist, Felicity Meakins, mathematician, Xia Hua and Gurindji woman, Cassandra Algy. Their work focuses on a new Indigenous language emerging from a mix of Gurindji, a traditional language of the Northern Territory, and Kriol, an English-based Creole language widely spoken in northern Australia.",
    speaker:"Katharine Coles",
    affiliation:"La Trobe University Melbourne ",
},




];

export const dataWithDates = sessionData.map(item => ({
  ...item,
  start: new Date(item.start),
  end: new Date(item.end)
}));

// export const paperData: PaperData[] = [
//   {
//     _id:"34124cdc-df79-49c6-9404-c2712b725601",
//     title:"Smoke Ceremony",
//     start:"2022-12-5T9:45:00Z",
//     end:"2022-12-5T10:15:00Z",
//     desc:"Test Description to Make sure this is working.",
//     isMulti:false,
//     bio:"Paul Collis is a Barkindji man. He was born in Bourke, in far north/west New South Wales. His early life was informed by Barkindji and Kunya and Murawarri, and Wongamara and Nyempa story tellers and artists, who taught him Aboriginal Culture and Law. Paul worked in Newcastle for much of his young adult life in the areas of teaching and Aboriginal community development. He has taught Aboriginal Studies to Indigenous inmates at the Worimi and Mount Penang juvenile detention centres and in Cessnock and Maitland prisons. He also managed a homeless Aboriginal boys' hostel. Paul earned his Doctorate at University Canberra in 2015, for a study of Barkindji identity with a specific focus on masculinity. His first novel, Dancing Home, won the 2017 David Unaipon Award for a previously unpublished work by an Indigenous author, and the 2019 ACT Book of the year Award. Paul’s first poetry collection, Nightmares Run Like Mercury, was published by Recent Works Press in 2021. Paul is Director, Indigenous Engagement, in the Faculty of Arts and Design at the University of Canberra.",
//     speaker:"Wally Bell",
//     affiliation:"University of Utah",
// },
// {
//     _id:"34124cdc-df79-49c6-9404-c2712b725602",
//     title:"Morning Tea",
//     start:"2022-12-5T10:15:00Z",
//     end:"2022-12-5T10:45:00Z",
//     desc:"Test Description to Make sure this is working.",
//     isMulti:false,
//     bio:"Lindell Bromham is a Professor of Evolutionary Biology at the Australian National University. Her research focusses on connecting evolutionary processes across all levels of change, from the genome to the biosphere, and on developing new ways to answer challenging questions regarding the “tempo and mode” (pace and mechanism) of evolutionary change. Most of her work focusses on molecular evolution (rates and patterns of change in DNA) or macroevolution (processes of biodiversity generation in time and space), but in the past five years, she has extended this general approach to other evolutionary systems, such as language and culture. She has engaged in interdisciplinary research over several decades, working with artists, philosophers, linguists, mathematicians. Lindell was awarded the 2021 Eureka Prize for Interdisciplinary Scientific Research for work in collaboration with linguist, Felicity Meakins, mathematician, Xia Hua and Gurindji woman, Cassandra Algy. Their work focuses on a new Indigenous language emerging from a mix of Gurindji, a traditional language of the Northern Territory, and Kriol, an English-based Creole language widely spoken in northern Australia.",
//     speaker:"Paul Collis",
//     affiliation:"La Trobe University Melbourne ",
// },
// ];