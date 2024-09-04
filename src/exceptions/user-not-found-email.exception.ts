import { NotFoundException } from '@nestjs/common';
import { I18nService, I18nContext } from 'nestjs-i18n';

export class UserNotFoundEmailException extends NotFoundException {
  constructor(email: string, i18n: I18nService) {
    super(
      i18n.translate('events.exceptions.user_not_found_email', {
        args: { email },
        lang: I18nContext.current().lang,
      }),
    );
  }
}
