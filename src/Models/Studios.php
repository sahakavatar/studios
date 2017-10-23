<?php namespace Sahakavatar\Studios\Models;

/**
 * Created by PhpStorm.
 * User: Comp1
 * Date: 3/20/2017
 * Time: 1:54 PM
 */
class Studios
{
    private static $path = 'app'.DS.'Modules'.DS.'Studios';
    private static $file = 'groups.json';
    public static $viewFolderPath = 'app'.DS.'Modules'.DS.'Studios'.DS.'Resources'.DS.'Views'.DS.'studios';
    public static $studioAssetsPath = 'app'.DS.'Modules'.DS.'Studios'.DS.'Resources'.DS.'Views'.DS.'studio_assets';

    public static function getGroupsList()
    {
        return json_decode(\File::get(self::$path.DS.self::$file),true);
    }

    /**
     * @param array $classes
     */
    public static function getStudiosByGroup($group)
    {
        $groups = self::getGroupsList();
        $data = [];
        if (isset($groups[$group]) && \File::isDirectory(self::$viewFolderPath . DS . $group)) {
            $files = \File::glob(self::$viewFolderPath . DS . $group . DS . "*.blade.php");
            if (count($files)) {
                foreach ($files as $file) {
                    $info = pathinfo($file);
                    $data[] = self::skipString($info['basename'], '.blade.php');
                }
            }
        }

        return $data;
    }

    public static function skipString($haystack, $needles,$replace = ''){
        return str_replace($needles,$replace,$haystack);
    }

    public static function linkAllCss()
    {
        if(\File::isDirectory(self::$studioAssetsPath.DS.'css')){
            $files =  \File::glob(self::$studioAssetsPath.DS.'css'.DS.'*.css');
            if(count($files)){
                foreach ($files as $file){
                    echo \Html::style($file);
                }
            }
        }
    }

    public static function linkAllCssByType($type)
    {
        if(\File::isDirectory(self::$viewFolderPath.DS.$type.DS."assets".DS."css")){
            $files =  \File::glob(self::$viewFolderPath.DS.$type.DS."assets".DS."css".DS.'*.css');
            if(count($files)){
                foreach ($files as $file){
                    echo \Html::style($file);
                }
            }
        }
    }

    public static function linkAllCssByStudio($type,$studio)
    {
        if(\File::isDirectory(self::$viewFolderPath.DS.$type.DS."assets".DS."css".DS.$studio)){
            $files =  \File::glob(self::$viewFolderPath.DS.$type.DS."assets".DS."css".DS.$studio.DS.'*.css');
            if(count($files)){
                foreach ($files as $file){
                    echo \Html::style($file);
                }
            }
        }
    }

    public static function linkAllJs()
    {
        if(\File::isDirectory(self::$studioAssetsPath.DS.'js')){
            $files =  \File::glob(self::$studioAssetsPath.DS.'js'.DS.'*.js');
            if(count($files)){
                foreach ($files as $file){
                    echo \Html::script($file);
                }
            }
        }
    }

    public static function linkAllJsByType($type)
    {
        if(\File::isDirectory(self::$viewFolderPath.DS.$type.DS."assets".DS."js")){
            $files =  \File::glob(self::$viewFolderPath.DS.$type.DS."assets".DS."js".DS.'*.js');
            if(count($files)){
                foreach ($files as $file){
                    echo \Html::script($file);
                }
            }
        }
    }

    public static function linkAllJsByStudio($type,$studio)
    {
        if(\File::isDirectory(self::$viewFolderPath.DS.$type.DS."assets".DS."js".DS.$studio)){
            $files =  \File::glob(self::$viewFolderPath.DS.$type.DS."assets".DS."js".DS.$studio.DS.'*.js');
            if(count($files)){
                foreach ($files as $file){
                    echo \Html::script($file);
                }
            }
        }
    }

    public static $elements = [
        'p' => "Text element",
        'span' => 'SPAN',
        'div' => 'DIV',
        'a' => 'A',
        'button' => 'BUTTON',
        'img' => 'IMG',
        'i' => 'I',
        'ul' => 'UL',
        'ol' => 'OL',
        'li' => 'LI',
        'form' => 'FORM',
        'label' => 'LABEL',
        'input' => 'INPUT',
        'textarea' => 'TEXTAREA',
        'select' => 'SELECT',
        'table' => 'TABLE',
        'thead' => 'THEAD',
        'tbody' => 'TBODY',
        'tr' => 'TR',
        'th' => 'TH',
        'td' => 'TD',
        'hr' => 'HR',
        'nav' => 'NAV',
        'html' => 'HTML',
        'body' => 'BODY',
        'header' => 'HEADER',
        'footer' => 'FOOTER',
        'article' => 'ARTICLE',
        'aside' => 'ASIDE',
        'section' => 'SECTION'
    ];
    public static $classes = [
        "general" => [
            'animation' => 'Animation',
            'position' => 'Position',
            'z-index' => 'Z-index',
            'filter' => 'Filter',
            'list-style' => 'List style',
        ]
        ,
        "containers" => [
            'padding' => 'Padding',
            'margins' => 'Margins',
            'radius' => 'Radius',
            'box_shadow' => 'Box shadow',
            'width' => 'Width',
            'height' => 'Height',
            'background_color' => 'Background color',
            'gradient_color' => 'Gradient color',
            'pattern_color' => 'Pattern color',
        ],
        "text_parts" => [
            'text_shadow' => 'Text shadow',
            'text_size' => 'Text size',
            'text_color' => 'Text color',
            'text_height' => 'Text height',
            'font_family' => 'Font family',
            'text_indent' => 'Text indent',
            'letter_spacing' => 'Letter spacing',
            'word_spacing' => 'Word spacing',
        ]
    ];
    public static $studioView = [
        'collections' => [
            'default' => '_partial.Elements.collection',
            'h1' => '_partial.Elements.collection',
            'h2' => '_partial.Elements.collection',
            'h3' => '_partial.Elements.collection',
            'h4' => '_partial.Elements.collection',
            'h5' => '_partial.Elements.collection',
            'h6' => '_partial.Elements.collection',
            'p' => '_partial.Elements.collection',
            'span' => '_partial.Elements.collection',
            'i' => '_partial.Elements.collection',
            'label' => '_partial.Elements.collection',
            'body' => '_partial.Elements.collection',
        ],
        'elements' => [
            'default' => '_partial.Elements.text',
        ],
        'basic' => [
            'default' => '_partial.Basics.default',
            'h1' => '_partial.Basics.test',
            'text_shadow' => '_partial.Basics.text_shadow',
            'text_size' => '_partial.Basics.text_size',
            'text_height' => '_partial.Basics.text_height',
            'text_indent' => '_partial.Basics.text_indent',
            'letter_spacing' => '_partial.Basics.letter_spacing',
            'font_family' => '_partial.Basics.font_family',
            'text_color' => '_partial.Basics.text_color',
            'word_spacing' => '_partial.Basics.word_spacing',
            'background_color' => '_partial.Basics.background_color',
            'borders' => '_partial.Basics.borders',
            'box_shadow' => '_partial.Basics.box_shadow',
            'gradient_color' => '_partial.Basics.gradient_color',
            'color' => '_partial.Basics.bstduiogradient_color',
            'height' => '_partial.Basics.height',
            'margins' => '_partial.Basics.margins',
            'padding' => '_partial.Basics.padding',
            'pattern_color' => '_partial.Basics.pattern_color',
            'radius' => '_partial.Basics.radius',
            'width' => '_partial.Basics.width',
            'animation' => '_partial.Basics.animation',
            'position' => '_partial.Basics.position',
            'z_index' => '_partial.Basics.z_indexs',
            'filter' => '_partial.Basics.filter',
//            'color' => '_partial.Basics.color',
            'list-style' => '_partial.Basics.list-style',
        ],
        'component' => [
            'default' => '_partial.component.default'
        ],
        'global' => [
            'default' => '_partial.Elements.text',
        ]
    ];


}