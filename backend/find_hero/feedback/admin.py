from django.contrib import admin

from feedback.models import FeedbackItem, FeedbackUser


@admin.register(FeedbackItem)
class FeedbackItemAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'created_at'
    )


@admin.register(FeedbackUser)
class FeedbackUserAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'name'
    )
