$(function() {

	//小屏点击按钮触发导航栏
	$('#span1').on('click', function() {
		console.log(11);
		$('.m-nav-box-content').css({
			display: 'block',
			zIndex: 16,
		})
	})
	//小屏点击取消按钮 取消导航栏
	$('#span2').on('click', function() {
		$('.m-nav-box-content').css({
			display: 'none',
		})
	})

	//遍历优选好品数据
	function getTypeData() {

		var currentType = $('.type-active').data('type');

		var currentData = infor[currentType];

		for (var i = 0; i < currentData.length; i++) {

			var itemData = $(
				`<div class="col-lg-3">
								<div class="pro-content  wow fadeIn">
									<div>
										<img class="d-block w-100" src="${currentData[i].img}" alt="">
									</div>
									<h3 class="text-center my-4">${currentData[i].title}</h3>
									<div class="text-center pro-info">
										<div>${currentData[i].content}</div>
									</div>

								</div>
							</div>`
			)

			$('.pros').append(itemData);

		}

		$('.pro-title').on('mousemove', function() {

			var dangqian = $(this);

			if (dangqian.hasClass('type-active')) {
				return;
			}

			$('.type-active').removeClass('type-active');

			dangqian.addClass('type-active');

			$('.pros').empty();

			getTypeData();


		})


	}

	getTypeData();


	var childrenData = $('#span3').children();

	childrenData.on('mouseover',function(){
		
		for(var z= 0;z < childrenData.length;z++){
			$(this).addClass('col-origin-active').siblings().removeClass('col-origin-active');
		}
		
	})
	

})
