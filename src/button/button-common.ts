import { CSSType } from 'tns-core-modules/ui/core/view';
import { Button } from 'tns-core-modules/ui/button';
import { cssProperty } from 'nativescript-material-core/cssproperties';
import { Color } from 'tns-core-modules/color';
import { Property } from 'tns-core-modules/ui/core/properties';
import { VerticalTextAlignment } from 'nativescript-material-core';

@CSSType('MDButton')
export abstract class ButtonBase extends Button {
    public variant: string = 'contained';
    @cssProperty elevation: number;
    @cssProperty dynamicElevationOffset: number;
    @cssProperty rippleColor: Color;
    @cssProperty verticalTextAlignment: VerticalTextAlignment;
}

export const variantProperty = new Property<ButtonBase, string>({
    name: 'variant'
});
variantProperty.register(ButtonBase);
