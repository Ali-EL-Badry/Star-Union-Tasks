from django.shortcuts import render, redirect

def login(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')

        request.session['name'] = name
        request.session['email'] = email

        return redirect('todo:todo')
    
    return render(request, 'login.html')

