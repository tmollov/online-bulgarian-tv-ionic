"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1853],{1853:(T,l,s)=>{s.r(l),s.d(l,{TvChannelsPageModule:()=>f});var o=s(7479),h=s(6895),r=s(4719),c=s(1543),a=s(6738),v=s(1514),i=s(6194),u=s(4236);const d=[{path:"",component:(()=>{class n{constructor(e){this.channelService=e,this.subscriptions=[]}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}ngOnInit(){this.subscriptions.push(this.channelService.fetchTvChannels().subscribe(e=>{this.channelService.tvChannels=e}))}}return n.\u0275fac=function(e){return new(e||n)(a.Y36(v.U))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-tv-channels"]],decls:3,vars:1,consts:[[3,"channelsArray"]],template:function(e,m){1&e&&(a._UZ(0,"app-header"),a.TgZ(1,"ion-content"),a._UZ(2,"app-channels-grid-view",0),a.qZA()),2&e&&(a.xp6(2),a.Q6J("channelsArray",m.channelService.tvChannels))},dependencies:[o.W2,i.E,u.f]}),n})()}];let g=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[c.Bz.forChild(d),c.Bz]}),n})();var p=s(5624),C=s(5737);let f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[o.Pc,h.ez,r.u5,g,p.a,C.S]}),n})()}}]);