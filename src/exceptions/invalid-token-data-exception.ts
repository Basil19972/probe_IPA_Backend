import { UnauthorizedException } from '@nestjs/common';
import { I18nService, I18nContext } from 'nestjs-i18n';

export class InvalidTokenDataException extends UnauthorizedException {
  constructor(i18n: I18nService) {
    super(
      i18n.translate('events.exceptions.invalid_token_data', {
        lang: I18nContext.current().lang,
      }),
    );
  }
}
