load(function(){
	var us_content = 
	[
		{ "name": "3GStore", "position": new google.maps.LatLng(42.2198, -88.2351), "content": "<strong>3GStore.com</strong><br/>Website: <a href='http://www.3gstore.com' target='_blank'>www.3gstore.com</a><br/>Phone: 866-347-8673" },
		{ "name": "Absolute", "position": new google.maps.LatLng(37.6305, -122.1181), "content": "<strong>Absolute Wireless, Inc</strong><br/>Website: <a href='http://www.absolutewirelessinc.com' target='_blank'>www.absolutewirelessinc.com</a><br/>Phone: 510-782-4284" },
		{ "name": "Accessory", "position": new google.maps.LatLng(33.9850, -117.9013), "content": "<strong>Accessory Geeks, Inc</strong><br/>Website: <a href='http://www.accessorygeeks.com' target='_blank'>www.accessorygeeks.com</a><br/>Phone: 626-363-8500" },
		{ "name": "Advanced", "position": new google.maps.LatLng(28.3889, -82.2090), "content": "<strong>Advanced Telecom Signal Boosters, LLC</strong><br/>Website: <a href='http://www.boostpoorsignal.com' target='_blank'>www.boostpoorsignal.com</a><br/>Phone: 866-704-1197" },
		{ "name": "A-I", "position": new google.maps.LatLng(47.7269, -116.7877), "content": "<strong>A-I Consolidated Inc</strong><br/>Website: <a href='http://www.aiconsol.com' target='_blank'>www.aiconsol.com</a><br/>Phone: 800-635-1545" },
		{ "name": "Alliance", "position": new google.maps.LatLng(43.6036208, -79.7723502), "content": "<strong>Alliance Corporation</strong><br/>Website: <a href='http://www.alliancecorporation.ca' target='_blank'>www.alliancecorporation.ca</a><br/>Phone: 888-821-4797" },
		{ "name": "Banner", "position": new google.maps.LatLng(39.2183, -120.9247), "content": "<strong>Banner Communications</strong><br/>Website: <a href='http://www.bannercom.com' target='_blank'>www.bannercom.com</a><br/>Phone: 530-273-0070" },
		{ "name": "Broad", "position": new google.maps.LatLng(44.1187, -121.2820), "content": "<strong>Broad Sky Networks</strong><br/>Website: <a href='http://www.broadskywireless.com' target='_blank'>www.broadskywireless.com</a><br/>Phone: 877-291-9575" },
		{ "name": "BZB", "position": new google.maps.LatLng(37.4993, -121.9787), "content": "<strong>BZB Express</strong><br/>Website: <a href='http://www.bzbexpress.com' target='_blank'>www.bzbexpress.com</a><br/>Phone: 888-660-2962" },
		{ "name": "Antenna", "position": new google.maps.LatLng(26.2738, -80.2569), "content": "<strong>Cell Antenna</strong><br/>Website: <a href='http://www.cellantenna.com' target='_blank'>www.cellantenna.com</a><br/>Phone: 877-285-5220" },
		{ "name": "Solutions", "position": new google.maps.LatLng(40.0765, -74.2021), "content": "<strong>Cell Signal Solutions</strong><br/>Website: <a href='http://www.cellsignalsolutions.com' target='_blank'>www.cellsignalsolutions.com</a><br/>Phone: 800-607-5031" },
		{ "name": "Specialist", "position": new google.maps.LatLng(39.7333, -104.9524), "content": "<strong>Cell Signal Specialist</strong><br/>Website: <a href='http://www.cellsignalspecialist.com' target='_blank'>www.cellsignalspecialist.com</a><br/>Phone: 720-556-5648" },
		{ "name": "Booster", "position": new google.maps.LatLng(38.2036553, -85.7373047), "content": "<strong>Cellphone Booster Store</strong><br/>Website: <a href='http://www.cellphoneboosterstore.com' target='_blank'>www.cellphoneboosterstore.com</a><br/>Phone: 888-878-9461" },
		{ "name": "CellularSolutions", "position": new google.maps.LatLng(43.7098, -84.4317), "content": "<strong>Cellular Solutions</strong><br/>Website: <a href='http://www.cellularsolutions.com' target='_blank'>www.cellularsolutions.com</a><br/>Phone: 877-233-6673" },
		{ "name": "CellularOutlet", "position": new google.maps.LatLng(34.1977, -118.6018), "content": "<strong>CellularOutlet.com, Inc</strong><br/>Website: <a href='http://signalboostoutlet.yahoostore.com' target='_blank'>signalboostoutlet.yahoostore.com</a><br/>Phone: 800-773-8321" },
		{ "name": "Champion", "position": new google.maps.LatLng(37.5169, -121.9177), "content": "<strong>Champion Telecom</strong><br/>Website: <a href='http://www.championtelecom.com' target='_blank'>www.championtelecom.com</a><br/>Phone: 408-914-0250" },
		{ "name": "Clear Communications", "position": new google.maps.LatLng(34.2489, -84.1747), "content": "<strong>Clear Communications</strong><br/>Website: <a href='http://clearcomms.net' target='_blank'>http://clearcomms.net</a><br/>Phone: 770-815-0000" },
		{ "name": "Criterion Cellular", "position": new google.maps.LatLng(37.9769, -122.5058), "content": "<strong>Criterion Cellular</strong><br/>Website: <a href='' target='_blank'></a><br/>Phone: 800-238-2811" },
		{ "name": "Crossover", "position": new google.maps.LatLng(43.683901, -79.716763), "content": "<strong>Crossover Distribution</strong><br/>Website: <a href='http://www.crossoverdistribution.com' target='_blank'>www.crossoverdistribution.com</a><br/>Phone: 866-616-5111" },
		{ "name": "Networx", "position": new google.maps.LatLng(35.7071, -97.4274), "content": "<strong>DAS Networx</strong><br/>Website: <a href='http://www.dasnetworx.com' target='_blank'>www.dasnetworx.com</a><br/>Phone: 405-820-3606" },
		{ "name": "Worldwide", "position": new google.maps.LatLng(38.7380, -76.6530), "content": "<strong>DAS Worldwide</strong><br/>Website: <a href='http://www.dasworldwide.com' target='_blank'>www.dasworldwide.com</a><br/>Phone: 877-327-1785" },
		{ "name": "Gap", "position": new google.maps.LatLng(43.4627, -79.7431), "content": "<strong>Gap Wireless Inc</strong><br/>Website: <a href='http://www.gapwirelessonline.com' target='_blank'>www.gapwirelessonline.com</a><br/>Phone: 855-826-3781" },
		{ "name": "Global", "position": new google.maps.LatLng(29.9221, -95.5478), "content": "<strong>Global Phone Company</strong><br/>Website: <a href='http://www.wirelessphonegallery.com' target='_blank'>www.wirelessphonegallery.com</a><br/>Phone: 832-955-1000" },
		{ "name": "Graybar", "position": new google.maps.LatLng(38.6303, -90.2167), "content": "<strong>Graybar Electric Company Inc</strong><br/>Website: <a href='http://www.graybar.com' target='_blank'>www.graybar.com</a><br/>Phone: 855-347-2839" },
		{ "name": "Halfliu Group of America", "position": new google.maps.LatLng(37.2890, -121.9809), "content": "<strong>Halfliu Group of America</strong><br/>Website: <a href='' target='_blank'></a><br/>Phone: 866-388-1988" },
		{ "name": "Hutton Communications Canada", "position": new google.maps.LatLng(43.6296, -79.6387), "content": "<strong>Hutton Communications Canada</strong><br/>Website: <a href='https://www.hol4g.com' target='_blank'>https://www.hol4g.com</a><br/>Phone: 800-265-8685" },
		{ "name": "Hutton Communications Inc Corp", "position": new google.maps.LatLng(32.9630, -96.8841), "content": "<strong>Hutton Communications Inc Corp</strong><br/>Website: <a href='http://www.hol4g.com' target='_blank'>www.hol4g.com</a><br/>Phone: 877-648-8866" },
		{ "name": "IHEARU", "position": new google.maps.LatLng(34.0615, -118.4407), "content": "<strong>IHEARU</strong><br/>Website: <a href='http://www.ihearu.net' target='_blank'>www.ihearu.net</a><br/>Phone: 877-746-6351" },
		{ "name": "Indoor", "position": new google.maps.LatLng(27.9365, -82.2426), "content": "<strong>Indoor Wireless Solutions</strong><br/>Website: <a href='http://www.indoor-wireless-solutions.com' target='_blank'>www.indoor-wireless-solutions.com</a><br/>Phone: 813--333-6557" },
		{ "name": "Jenne", "position": new google.maps.LatLng(41.4476, -82.0208), "content": "<strong>Jenne</strong><br/>Website: <a href='https://www.jenne.com' target='_blank'>https://www.jenne.com</a><br/>Phone: 800-422-6191" },
		{ "name": "King", "position": new google.maps.LatLng(45.1765, -93.8577), "content": "<strong>King Com Cable Networking Inc</strong><br/>Website: <a href='http://www.kingcomcable.com' target='_blank'>www.kingcomcable.com</a><br/>Phone: 612-868-5288" },
		{ "name": "Manley", "position": new google.maps.LatLng(33.5521, -117.6365), "content": "<strong>Manley Solutions Inc</strong><br/>Website: <a href='http://store.manleysolutions.com' target='_blank'>store.manleysolutions.com</a><br/>Phone: 949-340-0088" },
		{ "name": "Newtek", "position": new google.maps.LatLng(34.2782, -118.6970), "content": "<strong>Newtek Supply Inc</strong><br/>Website: <a href='http://www.newteksupply.com' target='_blank'>www.newteksupply.com</a><br/>Phone: 805-306-0472" },
		{ "name": "PDQ", "position": new google.maps.LatLng(32.8028, -117, 1673), "content": "<strong>PDQ Connect Inc</strong><br/>Website: <a href='http://www.pdq-wireless.com' target='_blank'>www.pdq-wireless.com</a><br/>Phone: 858-598-5001" },
		{ "name": "RCS", "position": new google.maps.LatLng(36.0715, -80.2068), "content": "<strong>RCS Wireless Technology</strong><br/>Website: <a href='http://www.getabettersignal.com' target='_blank'>www.getabettersignal.com</a><br/>Phone: 336-788-9191" },
		{ "name": "Repeater", "position": new google.maps.LatLng(33.6002, -117.7051), "content": "<strong>Repeater Store</strong><br/>Website: <a href='https://www.repeaterstore.com' target='_blank'>https://www.repeaterstore.com</a><br/>Phone: 800-761-3041" },
		{ "name": "Rock Signal", "position": new google.maps.LatLng(40.0782, -74.2058), "content": "<strong>Rock Signal</strong><br/>Website: <a href='' target='_blank'></a><br/>Phone: 888-986-0007" },
		{ "name": "Seamless", "position": new google.maps.LatLng(43.6480, -84.2158), "content": "<strong>Seamless Cellular</strong><br/>Website: <a href='http://www.seamlesscellular.com' target='_blank'>www.seamlesscellular.com</a><br/>Phone: 989-687-6122" },
		{ "name": "SignalBoosters", "position": new google.maps.LatLng(36.1507, -78.8733), "content": "<strong>Signal Boosters</strong><br/>Website: <a href='http://www.signalboostersnc.com' target='_blank'>www.signalboostersnc.com</a><br/>Phone: 888-526-2610" },
		{ "name": "Signal Expander", "position": new google.maps.LatLng(33.5987, -117.7127), "content": "<strong>Signal Expander</strong><br/>Website: <a href='http://www.signalexpander.com' target='_blank'>www.signalexpander.com</a><br/>Phone: 855-643-7520" },
		{ "name": "Silk", "position": new google.maps.LatLng(29.6248, -95.5633), "content": "<strong>Silk Worldwide</strong><br/>Website: <a href='http://www.signalboosters.com' target='_blank'>www.signalboosters.com</a><br/>Phone: 800-568-2723" },
		{ "name": "Synnex", "position": new google.maps.LatLng(34.0350, -117.5919), "content": "<strong>Synnex Corporation</strong><br/>Website: <a href='http://www.synnex.com' target='_blank'>www.synnex.com</a><br/>Phone: 800-756-1888" },
		{ "name": "Talk", "position": new google.maps.LatLng(43.1358783, -79.2101805), "content": "<strong>Talk Wireless Inc</strong><br/>Website: <a href='http://www.talkwireless.com' target='_blank'>www.talkwireless.com</a><br/>Phone: 888-205-1114" },
		{ "name": "Talktyme", "position": new google.maps.LatLng(43.1210, -79.0248), "content": "<strong>Talktyme</strong><br/>Website: <a href='http://www.talktyme.com' target='_blank'>http://www.talktyme.com</a><br/>Phone: 888-640-5666" },
		{ "name": "Talley", "position": new google.maps.LatLng(33.9363, -118.0653), "content": "<strong>Talley Communications</strong><br/>Website: <a href='http://www.talleycom.com' target='_blank'>www.talleycom.com</a><br/>Phone: 800-949-7079" },
		{ "name": "Tessco", "position": new google.maps.LatLng(39.4850, -76.6610), "content": "<strong>Tessco</strong><br/>Website: <a href='https://www.tessco.com' target='_blank'>https://www.tessco.com</a><br/>Phone: 800-856-7398" },
		{ "name": "The Signal Group LLC", "position": new google.maps.LatLng(42.4642, -83.4630), "content": "<strong>The Signal Group LLC</strong><br/>Website: <a href='https://www.solidsignal.com' target='_blank'>https://www.solidsignal.com</a><br/>Phone: 877-312-4547" },
		{ "name": "Uber Signal", "position": new google.maps.LatLng(43.9663, -75.9119), "content": "<strong>Uber Signal</strong><br/>Website: <a href='http://www.ubersignal.com' target='_blank'>http://www.ubersignal.com</a><br/>Phone: 800-590-3564" },
		{ "name": "WAU, LLC", "position": new google.maps.LatLng(32.7238, -97.4502), "content": "<strong>WAU, LLC</strong><br/>Website: <a href='https://www.waunlimited.com' target='_blank'>https://www.waunlimited.com</a><br/>Phone: 817-560-7300" },
		{ "name": "Werner Electric Supply", "position": new google.maps.LatLng(44.2002, -88.6941), "content": "<strong>Werner Electric Supply</strong><br/>Website: <a href='https://www.wernerelectric.com' target='_blank'>https://www.wernerelectric.com</a><br/>Phone: 920-729-4500" },
		{ "name": "Werner Electric Ventures, LLC", "position": new google.maps.LatLng(44.2002, -88.6941), "content": "<strong>Werner Electric Ventures, LLC</strong><br/>Website: <a href='https://www.wernerelectric.com' target='_blank'>https://www.wernerelectric.com</a><br/>Phone: 651-458-3701" },
		{ "name": "Wireless Coverage Group Inc", "position": new google.maps.LatLng(26.9429, -80.1337), "content": "<strong>Wireless Coverage Group Inc</strong><br/>Website: <a href='http://residential.wirelesscoveragesolutions.com' target='_blank'>residential.wirelesscoveragesolutions.com</a><br/>Phone: 800-507-7405" },
		{ "name": "Wireless Solutions", "position": new google.maps.LatLng(43.8820, -79.4364), "content": "<strong>Wireless Solutions</strong><br/>Website: <a href='http://www.wireless-solutions.ca' target='_blank'>www.wireless-solutions.ca</a><br/>Phone: 416-400-4000" },
		{ "name": "WPS", "position": new google.maps.LatLng(44.8262, -92.9248), "content": "<strong>WPS</strong><br/>Website: <a href='http://www.wpsantennas.com' target='_blank'>www.wpsantennas.com</a><br/>Phone: 877-594-5766" }
	];
	
	var canada_content = 
	[
		{ "name": "TECHSPA Partners Inc", "position": new google.maps.LatLng(45.8976, -74.1693), "content": "<strong>TECHSPA Partners Inc</strong><br/>Website: <a href='http://www.techspa.ca' target='_blank'>http://www.techspa.ca</a><br/>Phone: 450-227-4118" },
		{ "name": "Allcan", "position": new google.maps.LatLng(53.5814, -113.5479), "content": "<strong>Allcan Distributors, Inc</strong><br/>Website: <a href='http://www.allcan.com' target='_blank'>www.allcan.com</a><br/>Phone: 780-451-2357" },
		{ "name": "Wholesaling", "position": new google.maps.LatLng(51.0795, -114.0171), "content": "<strong>Cellular Wholesaling</strong><br/>Website: <a href='http://www.surepower.net' target='_blank'>www.surepower.net</a><br/>Phone: 888-889-8882" },
		{ "name": "A", "position": new google.maps.LatLng(52.8262, -121.9248), "content": "<strong>AAAAAA</strong><br/>Website: <a href='http://www.aaa.com' target='_blank'>www.aaa.com</a><br/>Phone: 012-345-6789" },
		{ "name": "B", "position": new google.maps.LatLng(59.8262, -120.9248), "content": "<strong>BBBBBB</strong><br/>Website: <a href='http://www.bbb.com' target='_blank'>www.bbb.com</a><br/>Phone: 123-456-7890" },
		{ "name": "C", "position": new google.maps.LatLng(63.8262, -129.9248), "content": "<strong>CCCCCC</strong><br/>Website: <a href='http://www.ccc.com' target='_blank'>www.ccc.com</a><br/>Phone: 012-345-6789" },
		{ "name": "D", "position": new google.maps.LatLng(56.8262, -101.9248), "content": "<strong>DDDDDD</strong><br/>Website: <a href='http://www.ddd.com' target='_blank'>www.ddd.com</a><br/>Phone: 123-456-7890" },
		{ "name": "E", "position": new google.maps.LatLng(52.8262, -98.9248), "content": "<strong>EEEEEE</strong><br/>Website: <a href='http://www.eee.com' target='_blank'>www.eee.com</a><br/>Phone: 012-345-6789" },
		{ "name": "F", "position": new google.maps.LatLng(58.8262, -110.9248), "content": "<strong>FFFFFF</strong><br/>Website: <a href='http://www.fff.com' target='_blank'>www.fff.com</a><br/>Phone: 123-456-7890" },
		{ "name": "G", "position": new google.maps.LatLng(50.8262, -74.9248), "content": "<strong>GGGGGG</strong><br/>Website: <a href='http://www.ggg.com' target='_blank'>www.ggg.com</a><br/>Phone: 012-345-6789" },
		{ "name": "H", "position": new google.maps.LatLng(55.8262, -65.9248), "content": "<strong>HHHHHH</strong><br/>Website: <a href='http://www.hhh.com' target='_blank'>www.hhh.com</a><br/>Phone: 123-456-7890" }
	];
	
	var marker;
	var us_markers = [];
	var canada_markers = [];
	var infowindows = [];
	var lastIndex = -1;
	var countryRestrict = {country:'us'};
	var geocoder;
	var myOptions = {
		zoom: 8,
		center: new google.maps.LatLng(37, -101), //加拿大(58, -100);美国(37, -101)
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById('map'),myOptions);
	var input = document.getElementById('input');
	geocoder = new google.maps.Geocoder();

	//添加多个标注，并将其存入数组markers[]
	addMarkers();
	
	//调用函数实现功能要求  
	var us_bounds = new google.maps.LatLngBounds();
	var canada_bounds = new google.maps.LatLngBounds();
	
	//读取标注点的位置坐标，加入LatLngBounds  
	for (var i = 0; i < us_markers.length; i++) {
		us_bounds.extend(us_markers[i].getPosition());
	};
	for (var i = 0; i < canada_markers.length; i++) {
		canada_bounds.extend(canada_markers[i].getPosition());
	};
	
	//调整map，使其适应LatLngBounds,实现展示最佳视野的功能
	countryRestrict.country === 'us' ? map.fitBounds(us_bounds) : map.fitBounds(canada_bounds);
	
	var autocomplete = new google.maps.places.Autocomplete(input, {componentRestrictions: countryRestrict});
	var myPlaces = new google.maps.places.PlacesService(map);
	countryRestrict.country === 'us' ? autocomplete.bindTo('us_bounds', map) : autocomplete.bindTo('canada_bounds', map);
	google.maps.event.addListener(autocomplete, 'place_changed', function () {
		//infowindow.close();
		var place = autocomplete.getPlace();
		if(!place.geometry){
			return;
		};
		if(place.geometry.viewport){
			map.fitBounds(place.geometry.viewport);
		}else{
			map.setCenter(place.geometry.location);
			map.setZoom(8);
		};
		map.setZoom(8);
		marker.setPlace({
			placeId: place.place_id,
			title: place.name,
			location: place.geometry.location
		});
		//不显示搜索结果图标
		marker.setVisible(false);
	});

	//添加多个标注，并将其存入数组markers[]
	function addMarkers() {
		for(var i = 0; i < us_content.length; i++){
			marker = new google.maps.Marker({
				position: us_content[i].position,
				map: map
			});
			us_markers.push(marker);
			marker.setTitle(us_content[i].name);
			attachSecretMessage(marker, us_content[i].content);
		};
		for(var i = 0; i < canada_content.length; i++){
			marker = new google.maps.Marker({
				position: canada_content[i].position,
				map: map
			});
			canada_markers.push(marker);
			marker.setTitle(canada_content[i].name);
			attachSecretMessage(marker, canada_content[i].content);
		};
	};
	
	//添加信息窗口
	function attachSecretMessage(marker, content){
		var infowindow = new google.maps.InfoWindow({
			content: content
		});
		infowindows.push(infowindow);
		//infowindow.open(marker.get('map'), marker);
		google.maps.event.addListener(marker, 'click', function (){
		if(lastIndex != -1){
			infowindows[lastIndex].close();
		};
		infowindow.open(marker.get('map'), marker);
		lastIndex = infowindows.indexOf(infowindow, 0);
		});
	};
	
	//回车搜索
	function codeAddress() {
		var address = input.value;
		geocoder.geocode({ 'address': address, componentRestrictions: countryRestrict}, function (results, status){
			if(status == google.maps.GeocoderStatus.OK){
				map.setCenter(results[0].geometry.location);
				var marker = new google.maps.Marker({
					map: map,
					position: results[0].geometry.location
		   	});
		   	//不显示搜索结果图标
		   	marker.setVisible(false);
		   	map.setZoom(8);
			}else{
				alert('Geocode was not successful for the following reason: ' + status);
			};
		});
	};

	plimg('50.1','png');
	plimg('51.1','png');
	e('.canada').onmouseover = function(){
		e(this,'img').src = './images/50.1.png';
	};
	e('.canada').onmouseout = function(){
		e(this,'img').src = './images/50.png';
	};
	e('.us').onmouseover = function(){
		e(this,'img').src = './images/51.1.png';
	};
	e('.us').onmouseout = function(){
		e(this,'img').src = './images/51.png';
	};
	e('.canada').onclick = function(){
		countryRestrict.country = 'can';
		e('#us').checked = false;
		e('#canada').checked = true;
		map.setCenter(new google.maps.LatLng(58, -100));
		e('.inmap').style.visibility = 'visible';
		if(e('.s_city')){
			e('.s_city').style.visibility = 'visible';
		}else{
			e('.form').style.display = 'block';
			e('.preferred_resellers').style.display = 'block';
			e('.master_resellers').style.display = 'block';
			e('.inmap').style.position = 'relative';
			e('.inmap').style.top = 0;
			e('.map_pic').style.display = 'none';
		};
		for(var i = 0; i < e('.canadaShow').length; i++){
			e('.usShow')[i].style.display = 'none';
			e('.canadaShow')[i].style.display = 'block';
		};
	};
	e('.us').onclick = function(){
		countryRestrict.country = 'us';
		e('#canada').checked = false;
		e('#us').checked = true;
		map.setCenter(new google.maps.LatLng(37, -101));
		e('.inmap').style.visibility = 'visible';
		if(e('.s_city')){
			e('.s_city').style.visibility = 'visible';
		}else{
			e('.form').style.display = 'block';
			e('.preferred_resellers').style.display = 'block';
			e('.master_resellers').style.display = 'block';
			e('.inmap').style.position = 'relative';
			e('.inmap').style.top = 0;
			e('.map_pic').style.display = 'none';
		};
		for(var i = 0; i < e('.usShow').length; i++){
			e('.canadaShow')[i].style.display = 'none';
			e('.usShow')[i].style.display = 'block';
		};
	};

	e('#input').onkeydown = function(ev){
		var e = ev || event;
		if(e.keyCode === 13){
			codeAddress();
			return false;
		};
	};

	if(e('.form')){
		e('#button').onclick = function(){
			codeAddress();
		};
		e(e('.input2'),'input').onfocus = function(){
			e(e('.input2'),'ul').style.display = 'block';
			var li = e(e(e('.input2'),'ul'),'li');
			for(var i = 0; i < li.length; i++){
				li[i].onclick = function(){
					e(e('.input2'),'ul').style.display = 'none';
					e(e('.input2'),'input').value = this.innerHTML;
				};
			};
		};
	};
	
	e('#us').onclick = function(){
		e('#input').value = '';
		countryRestrict.country = 'us';
		map.setCenter(new google.maps.LatLng(37, -101));
		for(var i = 0; i < e('.usShow').length; i++){
			e('.canadaShow')[i].style.display = 'none';
			e('.usShow')[i].style.display = 'block';
		};
	};
	e('#canada').onclick = function(){
		e('#input').value = '';
		countryRestrict.country = 'can';
		map.setCenter(new google.maps.LatLng(58, -100));
		for(var i = 0; i < e('.canadaShow').length; i++){
			e('.usShow')[i].style.display = 'none';
			e('.canadaShow')[i].style.display = 'block';
		};
	};	
});