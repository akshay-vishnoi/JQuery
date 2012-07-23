$(document).ready(function() {

	var flag = "true", emp_data;


	$.ajax({
		url : 'employee.json',
		type: 'GET',
		dataType: 'json',
		success: function(response) {
			emp_data = response;
			insertEmployees(emp_data);
		},
		error: function(xhr, status) {
			alert("Sorry, there was a problem in fetching information");
		} 
	});


	function insertEmployees(emp_data) {

		for(i = 0; i < emp_data.length; i++) {
			var container, employee_div;
			container = $('<div class = "sub_roles"></div>');
			employee_div = $('<div class = "inrole" style = "margin:0px; box-shadow:0px 0px;" for = "emp" id = ' + emp_data[i].id + '></div>');
			$('.employee')
				.append(container
					.append(employee_div
						.text(emp_data[i].name)
					)
				);
			employee_div.draggable( {	revert:true	} );
		}
	}
	
	$('.role').children().first().siblings().droppable(
		{
			
			drop: function(event,ui) {
				var employee = ui.draggable, employee_id = employee.attr('id'), employee_text = employee.text(), role = $(this), todo_class_todo, todo_class_child, sub_role, left, delete_img, employee_inRole, subContainer, middleContainer, employee_name, employee_tasks, image_maxmin;
				role.children().first().siblings().each(function() {
					if(employee_id == $(this).attr('for')) {
						flag = false;
					}
				});

				if(flag == "true") {

					sub_role = $('<div class = "sub_roles" for = ' + employee_id + '></div>');
					left = $('<div class ="left"></div>');
					delete_img = $('<img src = "cross_circle.png"/>');
					employee_inRole = $('<div class = "inrole"></div>');

					role.append(sub_role.append(left.append(delete_img)).append(employee_inRole.text(employee_text)));

					sub_role.hover(function() {
						sub_role.find('.left').find('img').show();
						employee_inRole.attr('style', 'background-color:#adacac');
					}, function() {
						sub_role.find('.left').find('img').hide();
						employee_inRole.attr('style', 'background-color:white');

					});
				
					todo_class_todo = 'div .' + role.attr('id') + '_todo';
					todo_class_child = '#' + role.attr('id') + '_child';

					subContainer = $('<div class = "inrole wide task_border" for = "' + employee_id + '"></div>');
					middleContainer = $('<div class = "mid"></div>');
					employee_name = $('<div class = "name"></div>');
					employee_tasks = $('<div class = "tasks"></div>');
					image_maxmin = $('<img class = "img_task" src = "plus.png"/>');

					subContainer.append(middleContainer.append(employee_name.text(employee_text)).append(employee_tasks.text('Add todos for ' + employee_text + ' here').append(image_maxmin)));	

					$(todo_class_todo).find(todo_class_child).append(subContainer);
				} else {
					flag = "true";
				}
			}
		}
	);
	$('[for=min_max]').toggle(
		function() {
			$(this).attr('src', "plus.png");
			$(this).parent().next().slideUp();
		},
		function(){
			$(this).attr('src', "minus.png");
			$(this).parent().next().slideDown();
		}
	);

	$('.role').on('click', 'img', function() {
		if(confirm("Are you sure, you want to delete.")) {
			var emp_id, role_name, img = $(this), role_id;
			emp_id = img.parent().parent().attr('for');
			role_id = img.parentsUntil('.role').last().attr('id');
			role_name = role_id + '_todo';
			$('.todo').find('.' + role_name).find('[for=' + emp_id + ']').remove();
			img.parentsUntil('#' + role_id).remove();
		}
	});
});

