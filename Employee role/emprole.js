$(document).ready(function() {

	var flag = true, emp_data;


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

			container = $('<div></div>');
			container.attr('class', 'sub_roles');

			employee_div = $('<div></div>');
			employee_div.attr('class', 'inrole insertEmployees');
			employee_div.attr('id', emp_data[i].id);
			
			employee_div.text(emp_data[i].name);
			container.append(employee_div);
			$('.employee').append(container);

			employee_div.draggable( {	revert:true	} );
		}
	}
	
	$('.role').find('.addrole').droppable(
		{
			
			drop: function(event,ui) {
				var employee = ui.draggable, employee_id = employee.attr('id'), employee_text = employee.text(), role = $(this), todo_class_todo, todo_class_child, sub_role, left, delete_img, employee_inRole, subContainer, middleContainer, employee_name, employee_tasks, image_maxmin;
				role.find('.addrole').each(function() {
					if(employee_id == $(this).attr('data-emp_id')) {
						flag = false;
					}
				});

				if(flag == true) {

					sub_role = $('<div></div>');
					sub_role.attr('class', 'sub_roles addrole').attr('data-emp_id', employee_id);

					left = $('<div></div>');
					left.attr('class', 'left');

					delete_img = $('<img />');
					delete_img.attr('src', 'cross_circle.png');

					employee_inRole = $('<div></div>');
					employee_inRole.attr('class', 'inrole');
	
					employee_inRole.text(employee_text);
					left.append(delete_img);
					sub_role.append(left).append(employee_inRole);
					role.append(sub_role);

					sub_role.hover(function() {
						sub_role.find('.left').find('img').show();
						employee_inRole.attr('style', 'background-color:#adacac');
					}, function() {
						sub_role.find('.left').find('img').hide();
						employee_inRole.attr('style', 'background-color:white');

					});
				
					todo_class_todo = 'div .' + role.attr('id') + '_todo';
					todo_class_child = '#' + role.attr('id') + '_child';

					subContainer = $('<div></div>');
					subContainer.attr('class', 'inrole wide task_border').attr('data-emp_id', employee_id);

					middleContainer = $('<div></div>');
					middleContainer.attr('class', 'mid');

					employee_name = $('<div></div>');
					employee_name.attr('class', 'name');

					employee_tasks = $('<div></div>');
					employee_tasks.attr('class', 'tasks');

					image_maxmin = $('<img />');
					image_maxmin.attr('class', 'img_task').attr('src', 'plus.png');

					task_text = 'Add todos for ' + employee_text + ' here';

					employee_tasks.text(task_text);
					employee_name.text(employee_text);

					employee_tasks.append(image_maxmin);
					middleContainer.append(employee_name).append(employee_tasks);					  
					subContainer.append(middleContainer);	
					$(todo_class_todo).find(todo_class_child).append(subContainer);

				} else {
					flag = true;
				}
			}
		}
	);
	$('[data-min_max=min_max]').toggle(
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

			emp_id = img.parent().parent().attr('data-emp_id');

			role_id = img.parentsUntil('.role').last().attr('id');
			role_name = role_id + '_todo';
			data_attr_check = '[data-emp_id=' + emp_id + ']';
			$('.todo').find('.' + role_name).find(data_attr_check).remove();
			img.parentsUntil('#' + role_id).remove();
		}
	});
});

