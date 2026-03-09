# WpMVC Documentation Standards & Skill Rules

Use these rules when refactoring or creating documentation for the WpMVC framework. These standards ensure consistency, PHP 7.4 compatibility, and a unique WpMVC brand voice.

## 1. General Style & Structure
- **Inspiration**: Use the Laravel 12.x documentation as a structural guide (header hierarchy, clear sections like "Introduction").
- **Tweak Prose**: Do not copy Laravel's text 1:1. Tweak paragraphs to include WpMVC-specific branding and WordPress context (e.g., mention plugins, hooks, or service providers).
- **Introduction**: Always include an "Introduction" section that explains the *why* from a WordPress developer's perspective.

## 2. PHP Version & Compatibility
- **Version**: Strictly stick to **PHP 7.4**.
- **No PHP 8+ Features**: Do NOT use constructor property promotion, union types (except in comments/PHPDoc), or named arguments.
- **Typed Properties**: Use 7.4 typed properties (e.g., `protected string $name;`).

## 3. Code Formatting (WordPress/Laravel Hybrid)
Follow these exact formatting rules in all `@php` code blocks:
- **Security Check**: Always include `defined( "ABSPATH" ) || exit;` at the top of the file/snippet after the namespace and `use` statements.
- **Spaces inside Parentheses**: Add spaces inside parentheses for function/method declarations and calls (e.g., `function( $id )`, `call( [ ... ] )`).
- **Array Spacing**: Add spaces inside array brackets (e.g., `[ 'id' => 1 ]`).
- **Braces**:
    - **Classes**: Opening brace `{` on a **new line**.
    - **Methods**: Opening brace `{` on the **same line** as the declaration.
- **Naming**: Use `snake_case` for all variables and functions/methods (e.g., `find_podcast()`, `$variable_name`).

## 4. Namespaces & Aliases
- **Prefix**: Prefix all custom and WpMVC classes with `MyPluginNamespace` inside code blocks.
    - Example: `MyPluginNamespace\App\Http\Controllers`, `MyPluginNamespace\WpMVC\App`.
- **Prose vs. Code**: Use the prefix in code blocks. In the prose (descriptive text), use generic terms or reference the class without the full prefix unless necessary for clarity.
- **Controllers**: Use the namespace `MyPluginNamespace\App\Http\Controllers`.

## 5. Framework-Specific APIs
- **Responses**: Replaced `view()` with `Response::send( [] )`.
    - Namespace: `MyPluginNamespace\WpMVC\Routing\Response`.
- **App Helper**: Avoid `app()` helper. Use `MyPluginNamespace\WpMVC\App`.
    - `App` now supports static and instance calls (e.g., `App::get()`, `App::call()`).
- **Configuration**: Avoid the global `config()` helper. Use the explicit configuration engine:
    - Syntax: `App::get_config()->get( 'key' )`.
- **PSR-11**: Mention support for `Psr\Container\ContainerInterface`.

## 6. Focus & Context
- **WordPress Integration**: Prioritize examples and prose that focus on WordPress hooks (`add_action`, `add_filter`), Custom Post Types, and Shortcodes.
- **Avoid Redundancy**: In architectural overviews (like Service Providers), omit sections regarding "Middleware" or "Routing" if the context is specifically about plugin bootstrapping and hook orchestration.


## 7. SEO & Meta
- **Page Titles**: Use descriptive yet clean titles (e.g., "Service Container").
- **Meta Description**: Provide a unique, keyword-rich meta description for each page that mentions WpMVC and its benefits for WordPress developers.

---

### Example Reference
```php
<?php

namespace MyPluginNamespace\App\Http\Controllers;

defined( "ABSPATH" ) || exit;

use MyPluginNamespace\Services\AppleMusic;
use MyPluginNamespace\WpMVC\Routing\Response;

class PodcastController extends Controller
{
    /**
     * The AppleMusic service instance.
     */
    protected AppleMusic $apple;

    /**
     * Create a new controller instance.
     *
     * @param  AppleMusic  $apple
     * @return void
     */
    public function __construct( AppleMusic $apple ) {
        $this->apple = $apple;
    }

    /**
     * Show information about the given podcast.
     */
    public function show( $id ) {
        return Response::send(
            [
                'podcast' => $this->apple->find_podcast( $id )
            ]
        );
    }
}
```
