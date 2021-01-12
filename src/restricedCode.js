/*
    Don't look at this token, if you are not the owner...
    I said "Don't"
*/
//const token = '3ce55404-79bc-4694-9012-a70d3cebf9f6';
const token = 'a831f6da-e17b-4615-b33c-34a1d50b726c';

// format for the respone query
const format = {
    json: 'json',
    xml: 'xml',
    rss: 'rss',
    excel: 'excel'
}

const highLight = {
    True: 'true',
    False: 'false'
}

const languages = {
    English: 'english',
    Hindi: 'hindi',
    Assamese: 'assamese',
    German: 'german'
}

const author = "";

const published = "";

const siteType = {
    Any: 'any',
    News: 'news',
    Blogs: 'blogs',
    Discussions: 'discussions'
} 

const threadCountry = {
    India: 'IN',
    UnitedKingdom: 'GB',
    UnitedStatesofAmerica: 'US',
    Australia: 'AU'
}

export const Parameter = {
    Token: token,
    Format: format,
    HighLight: highLight,
    Languages: languages,
    Author: author,
    Published: published,
    SiteType: siteType,
    ThreadCountry: threadCountry
}