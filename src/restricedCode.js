/*
    Don't look at this token, if you are not the owner...
    I said "Don't"
*/
//const token = '3ce55404-79bc-4694-9012-a70d3cebf9f6';
//const token = 'a831f6da-e17b-4615-b33c-34a1d50b726c';
//const token = 'e4efafdb-7fb9-4655-92ce-dba9daae080e';
//const token = '83d3375c-5db9-4d90-8755-2de5ce598642';
const token = '28a90cd0-b46e-4dd0-993d-3a8d60a8f1c4';

// format for the respone query
const format = {
    default: 'none',
    Json: 'json',
    XML: 'xml',
    RSS: 'rss',
    Excel: 'excel'
}

const languages = {
    default: 'none',
    English: 'english',
    Hindi: 'hindi',
    Assamese: 'assamese',
    German: 'german'
}

const siteType = {
    Any: 'any',
    News: 'news',
    Blogs: 'blogs',
    Discussions: 'discussions'
} 


export const Parameter = {
    Token: token,
    Format: format,
    Languages: languages,
    SiteType: siteType,
}