interface MediaUrl{ 
    url : string;
}

export class json {
    id: number;
    name: string;
    summary: string;
    screenshots : MediaUrl[];
    genres:number[];
    cover:MediaUrl;
     videos?:{"name": string; "video_id": number;};
}