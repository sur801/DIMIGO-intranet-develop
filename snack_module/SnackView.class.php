<?php

	class SnackView extends View {

		public $total_day, $first_day, $total_week, $last_day, $yoil;
		
		public function init() {
			$this->total_day = date("t", time());
			$this->first_day = date("w", strtotime(date("Y-m")."-01"));
			$this->total_week = (int)ceil(($this->total_day + $this->first_day) / 7);
			$this->last_day = (int)date('w', strtotime(date("Y-m")."-".$this->total_day));
			$this->yoil = array("일","월","화","수","목","금","토");
		}

		public function dispDefault()
		{
			$this->execTemplate('snackTemplate');
		}
	}

?>