export class ParseAPIData {
    backgroundColor: string = "#000000";
    tag: string;
    textColor: string = "#ffffff";
    thumbnail: string;
    title: string;
    topicURL: string;
    url: string;

    private baseURL = 'https://www.reddit.com';
    constructor(data: any) {
        this.backgroundColor = data.link_flair_background_color || '#000000';
        this.tag = data.link_flair_text?.replaceAll('&amp;', ' & ') || '';
        this.textColor = data.link_flair_text_color === 'light' ? '#ffffff' : '#000000';
        this.thumbnail = data.thumbnail || '';
        this.title = data.title || 'Title is not present, please create one';
        this.topicURL = `${this.baseURL}${data.permalink}` || '';
        this.url = data.url || 'N/A';
        // debugger;
    }
}
