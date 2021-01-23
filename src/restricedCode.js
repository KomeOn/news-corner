/*
    Don't look at this token, if you are not the owner...
    I said "Don't"
*/
//const token = '3ce55404-79bc-4694-9012-a70d3cebf9f6';
//const token = 'a831f6da-e17b-4615-b33c-34a1d50b726c';
//const token = 'e4efafdb-7fb9-4655-92ce-dba9daae080e';
const token = '83d3375c-5db9-4d90-8755-2de5ce598642';

// format for the respone query
const format = {
    default: 'none',
    Json: 'json',
    XML: 'xml',
    RSS: 'rss',
    Excel: 'excel'
}

const highLight = {
    True: 'true',
    False: 'false'
}

const languages = {
    default: 'none',
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

const urls = {
    Default: "https://webhose.io/filterWebContent?token=a831f6da-e17b-4615-b33c-34a1d50b726c&size=10&sort=relevancy&q=",
    Format: "https://webhose.io/filterWebContent?token=a831f6da-e17b-4615-b33c-34a1d50b726c&size=10&format=json&sort=relevancy&q=",
    ForLangEng: "https://webhose.io/filterWebContent?token=a831f6da-e17b-4615-b33c-34a1d50b726c&size=10&format=json&sort=relevancy&q=",
    ForLangHind: "https://webhose.io/filterWebContent?token=a831f6da-e17b-4615-b33c-34a1d50b726c&size=10&format=json&sort=relevancy&q=",
    ForLangEngNew: "https://webhose.io/filterWebContent?token=a831f6da-e17b-4615-b33c-34a1d50b726c&size_type=news&size=10&format=json&sort=relevancy&q=",
  }  

export const Parameter = {
    Token: token,
    Format: format,
    HighLight: highLight,
    Languages: languages,
    Author: author,
    Published: published,
    SiteType: siteType,
    ThreadCountry: threadCountry,
    URL: urls
}