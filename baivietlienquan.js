var relatedTitles=[],relatedTitlesNum=0,relatedUrls=[],thumburl=[];
function related_results_labels_thumbs(f){for(var e=0;e<f.feed.entry.length;e++){var g=f.feed.entry[e];relatedTitles[relatedTitlesNum]=g.title.$t;try{thumburl[relatedTitlesNum]=g.media$thumbnail.url}catch(h){s=g.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),thumburl[relatedTitlesNum]=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"undefined"!==typeof defaultnoimage?defaultnoimage:"http://2.bp.blogspot.com/-ZYEoT49P-FE/TvRI5TVi9nI/AAAAAAAAANQ/MWa3EA0geCM/s1600/noimage-namkna-blogspot-com-ngoctra.png"}35<relatedTitles[relatedTitlesNum].length&&
(relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,35)+"...");for(var i=0;i<g.link.length;i++)if("alternate"==g.link[i].rel)relatedUrls[relatedTitlesNum]=g.link[i].href,relatedTitlesNum++}}
function removeRelatedDuplicates_thumbs(){for(var f=[],e=[],g=[],h=0;h<relatedUrls.length;h++)contains_thumbs(f,relatedUrls[h])||(f.length+=1,f[f.length-1]=relatedUrls[h],e.length+=1,g.length+=1,e[e.length-1]=relatedTitles[h],g[g.length-1]=thumburl[h]);relatedTitles=e;relatedUrls=f;thumburl=g}function contains_thumbs(f,e){for(var g=0;g<f.length;g++)if(f[g]==e)return!0;return!1}
function printRelatedLabels_thumbs(f){for(var e=0;e<relatedUrls.length;e++)if(relatedUrls[e]==f||!relatedTitles[e])relatedUrls.splice(e,1),relatedTitles.splice(e,1),thumburl.splice(e,1),e--;f=Math.floor((relatedTitles.length-1)*Math.random());e=0;0<relatedTitles.length&&document.write("<h2>"+relatedpoststitle+"</h2>");for(document.write('<div style="clear: both;"/>');e<relatedTitles.length&&20>e&&e<maxresults;)document.write('<div class="lienquan"><a style="text-decoration:none;padding:3px;float:left;"'),
document.write(' href="'+relatedUrls[f]+'"><img style="width:60px;height:40px;border:1px solid #A8A8A8;padding:4px;background:#fff;margin-right:4px; float: left;" src="'+thumburl[f]+'" /><span style="color: #006633;font-family: Arial;font-size: 12px;font-weight: normal;text-align: justify">'+relatedTitles[f]+"</span></a></div>"),e++,f<relatedTitles.length-1?f++:f=0;document.write("</div>");relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);relatedTitles.splice(0,relatedTitles.length)}
;