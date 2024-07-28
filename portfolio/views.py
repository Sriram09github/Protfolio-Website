# from django.shortcuts import render

# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# import json

# @csrf_exempt
# def form(request):
#     if request.method == "Post":
#         data = json.loads(request.body)
#         response_data = {"message":"Form data received"}
#         return JsonResponse(response_data)
#     return JsonResponse({"error":"Invalid Request"}, status =400)
