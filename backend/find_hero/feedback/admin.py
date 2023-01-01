from django.contrib import admin

from feedback.models import FeedbackItem


@admin.register(FeedbackItem)
class FeedbackItemAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'name',
        'created_at'
    )
