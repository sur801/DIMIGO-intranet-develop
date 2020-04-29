function changeTab(tabID) {
	var target_tab = document.getElementById(tabID);
	var t1_button = document.getElementById('tab_a');
	var t2_button = document.getElementById('tab_b');
	var g1_content = document.getElementById('tab_a_content');
	var g2_content = document.getElementById('tab_b_content');

	if(target_tab.className == 'tab_off') {
		if(tabID == 'tab_a') {
			g1_content.className = 'view-on';
			g2_content.className = 'view-off';
			t1_button.className = 'tab_on';
			t2_button.className = 'tab_off';
			
		}
		else if(tabID == 'tab_b') {
			g1_content.className = 'view-off';
			g2_content.className = 'view-on';
			t1_button.className = 'tab_off';
			t2_button.className = 'tab_on';
		}
	}
}

function showCalendar(className){
	var show_calendar = document.getElementById('calendar');
	show_calendar.className='view-on';
}

function hideCalendar(className){
	var hide_calendar = document.getElementById('calendar');
	hide_calendar.className='view-off';
}