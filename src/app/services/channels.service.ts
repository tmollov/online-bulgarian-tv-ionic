/* eslint-disable max-len */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IChannel } from "../models/channel.inteface";

@Injectable({
  providedIn: "root",
})
export class ChannelsService {
  tvChannels: IChannel[] = [];
  musicChannels: IChannel[] = [];

  private links = {
    tv: "https://raw.githubusercontent.com/tmollov/channels-json/main/tv.json",
    music:
      "https://raw.githubusercontent.com/tmollov/channels-json/main/music.json",
  };

  constructor(private http: HttpClient) {}

  fetchTvChannels() {
    return this.http.get<IChannel[]>(this.links.tv);
  }

  fetchMusicChannels() {
    return this.http.get<IChannel[]>(this.links.music);
  }

  getChannel(name: string) {
    return (
      this.tvChannels.filter((c) => c.name === name)[0] ||
      this.musicChannels.filter((c) => c.name === name)[0]
    );
  }
}
