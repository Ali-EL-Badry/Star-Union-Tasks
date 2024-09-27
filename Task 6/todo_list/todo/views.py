from django.shortcuts import render, redirect

# Create your views here.
def todo(request):
    name = request.session.get('name')
    email = request.session.get('email')

    tasks = request.session.get('tasks', [])

    if request.method == 'POST':
        task = request.POST.get('task')
        tasks.append(task)
        request.session['tasks'] = tasks

        return redirect('todo:showtodo')
    return render(request, 'todo.html', {'name': name, 'email': email})

def showtodo(request):
    tasks = request.session.get('tasks', [])
    name = request.session.get('name')
    email = request.session.get('email')

    return render(request, 'show.html', {'tasks': tasks, 'name': name, 'email': email})